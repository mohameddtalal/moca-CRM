'use client';

import { useState, useRef } from 'react';

export function useCardEditor(
  initialTitle: string,
  initialDescription: string,
  cardId: string
) {
  // -----------------------
  // TEXT STATE
  // -----------------------
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  // -----------------------
  // FLIP CARD STATE
  // -----------------------
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped((prev) => !prev);

  // -----------------------
  // IMAGE STATE
  // -----------------------
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Unique input ID per card
  const inputId = `fileInput-${cardId}`;

  const handleUploadClick = () => {
    document.getElementById(inputId)?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const resetImage = () => setUploadedImage(null);

  // -----------------------
  // IMAGE POSITIONING + ZOOM
  // -----------------------
  const [size, setSize] = useState({ width: 250, height: 200 });
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [zoom, setZoom] = useState(1);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0015;
    setZoom((prev) => Math.min(Math.max(prev + delta, 0.2), 4));
  };

  // -----------------------
  // PARENT CONTAINER REF
  // -----------------------
  const containerRef = useRef<HTMLDivElement>(null);

  return {
    // flip
    isFlipped,
    handleFlip,

    // text
    title,
    setTitle,
    description,
    setDescription,

    // image
    uploadedImage,
    handleUploadClick,
    handleFileChange,
    resetImage,

    // image manipulation
    size,
    setSize,
    position,
    setPosition,
    zoom,
    setZoom,
    handleWheel,

    // unique input ID
    inputId,

    // ref
    containerRef,
  };
}
