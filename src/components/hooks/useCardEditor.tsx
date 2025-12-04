'use client';

import { useState, useRef, useEffect } from 'react';
import { useNav } from '../Context/Navcontext';

export function useCardEditor(
  initialTitle: string,
  initialDescription: string,
  cardId: string
) {
  // -----------------------
  // Load saved data from localStorage on mount
  // -----------------------
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
  const saved = localStorage.getItem(`card-${cardId}`);

  if (saved) {
    const {
      savedTitle,
      savedDescription,
      savedImage,
      savedSize,
      savedPosition,
      savedZoom,
    } = JSON.parse(saved);

    if (savedTitle) setTitle(savedTitle);
    if (savedDescription) setDescription(savedDescription);
    if (savedImage) setUploadedImage(savedImage);
    if (savedSize) setSize(savedSize);
    if (savedPosition) setPosition(savedPosition);
    if (savedZoom) setZoom(savedZoom);
  }
}, [cardId]);



  // -----------------------
  // Save function
  // -----------------------
  const saveToLocal = () => {
  localStorage.setItem(
    `card-${cardId}`,
    JSON.stringify({
      savedTitle: title,
      savedDescription: description,
      savedImage: uploadedImage,
      savedSize: size,
      savedPosition: position,
      savedZoom: zoom,
    })
  );
};



  // -----------------------
  // SELECTED CARD (your existing)
  // -----------------------
  const { setSelectedTitle, setSelectedButton } = useNav();

  const handleSelect = (buttonName: string) => {
    setSelectedTitle(title);
    setSelectedButton(buttonName);
  };


  // -----------------------
  // FLIP CARD
  // -----------------------
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped((prev) => !prev);


  // -----------------------
  // IMAGE STATE
  // -----------------------
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
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

  const resetImage = () => {
  setUploadedImage(null);

  // remove image only from stored card data
  const saved = localStorage.getItem(`card-${cardId}`);
  if (saved) {
    const parsed = JSON.parse(saved);
    parsed.savedImage = null;
    localStorage.setItem(`card-${cardId}`, JSON.stringify(parsed));
  }
};



  // -----------------------
  // IMAGE POSITION + ZOOM
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
  // REF
  // -----------------------
  const containerRef = useRef<HTMLDivElement>(null);


  // -----------------------
  // RETURN everything
  // -----------------------
  return {
    isFlipped,
    handleFlip,

    title,
    setTitle,
    description,
    setDescription,

    saveToLocal,

    uploadedImage,
    handleUploadClick,
    handleFileChange,
    resetImage,

    size,
    setSize,
    position,
    setPosition,
    zoom,
    setZoom,
    handleWheel,

    inputId,
    containerRef,

    handleSelect
  };
}