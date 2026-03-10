"use client";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Image as ImageIcon } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload?: (file: File) => void;
}

export default function UploadModal({
  isOpen,
  onClose,
  onUpload,
}: UploadModalProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [mounted, setMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className="bg-white rounded-[40px] w-full max-w-[600px] p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-center items-center mb-6">
          <h2
            className="text-[32px] font-semibold italic"
            style={{ color: "var(--hot-purple)", fontFamily: "Lora" }}
          >
            Upload Images
          </h2>
          <button
            onClick={onClose}
            className="absolute top-8 right-8 hover:opacity-70 transition-opacity"
            style={{ color: "var(--hot-purple)" }}
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Drop Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
          className={`
            border-2 border-dashed rounded-[32px] p-10 flex flex-col items-center justify-center cursor-pointer transition-all
            ${
              isDragging
                ? "border-[var(--hot-purple)] bg-[var(--navbar)]/20"
                : "border-[var(--hot-purple)]/30 hover:border-[var(--hot-purple)]/60"
            }
          `}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            accept="image/*,video/*"
          />
          <div className="p-4 rounded-2xl mb-4" style={{ color: "var(--hot-purple)" }}>
            <ImageIcon size={48} />
          </div>
          <p className="text-xl font-medium text-gray-700 mb-1">
            Browse here to start uploading
          </p>
          <p className="text-gray-400 text-sm">
            Supports PNG, JPG, JPEG, SVG, Video
          </p>
          <p className="text-gray-400 text-sm">Max. xxx MB</p>
        </div>

        {/* File Preview */}
        {selectedFile && (
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
              {selectedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImageIcon className="text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800 uppercase tracking-tight">
                {selectedFile.name.split(".")[0]}
              </p>
              <p className="text-gray-400 text-sm font-medium">
                {formatFileSize(selectedFile.size)}
              </p>
            </div>
          </div>
        )}

        {/* Progress Bar (visual only) */}
        {selectedFile && (
          <div className="mt-6 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full w-full transition-all duration-500"
              style={{ backgroundColor: "var(--hot-purple)" }}
            />
          </div>
        )}

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              if (selectedFile) {
                onUpload?.(selectedFile);
              }
            }}
            disabled={!selectedFile}
            className={`
              px-12 py-3 rounded-full font-semibold text-lg transition-all
              ${
                !selectedFile
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95 shadow-lg"
              }
            `}
            style={{ backgroundColor: "var(--hot-purple)", color: "#F7F7F7" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

