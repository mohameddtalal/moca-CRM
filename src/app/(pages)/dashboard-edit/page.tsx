'use client';
import { useState } from "react";
import NavbarDynamic from "@/components/Dashboard/Navbars/NavbarDynamic";
import BentoGrid from "@/components/Dashboard/BentoGrid/BentoGridEdit";
import LoginEdit from "@/components/LoginSystem/LoginForEditBackground/LoginEdit";
import ScrollingHeader from "@/components/Dashboard/ScrollingHeader/ScrollingHeader";
import AnimatedToggle from "@/components/Dashboard/Navigation/AnimatedToggle";
import UploadModal from "@/components/Dashboard/Modals/UploadModal";
import AuthLayout from "../auth/layout";
import Image from "next/image";
import { transform } from "next/dist/build/swc/generated-native";

const Page = () => {
  // Default to homepage view to match the homepage toggle
  const [active, setActive] = useState<"signin" | "home">("home");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [savedBackgroundImage, setSavedBackgroundImage] = useState<string | null>(null);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);

  const handleUploadComplete = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setBackgroundImage(result);
      setIsEditingImage(true);
      setIsUploadModalOpen(false);
    };
    reader.readAsDataURL(file);
  };

  const handleBack = () => {
    // Back to last saved / published background
    setBackgroundImage(savedBackgroundImage);
    setIsEditingImage(false);
  };

  const handleSave = () => {
    // Save current edit as working "saved" state (but not yet publish to live)
    setSavedBackgroundImage(backgroundImage);
    setIsEditingImage(false);
  };

  const handlePublish = () => {
    if (!backgroundImage) return;
    setShowPublishModal(true);
  };

  const confirmPublish = () => {
    if (!backgroundImage) return;
    // Persist published background for sign-in, as before
    localStorage.setItem("published-login-bg", backgroundImage);
    setSavedBackgroundImage(backgroundImage);
    setIsEditingImage(false);
    setShowPublishModal(false);
  };



  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <NavbarDynamic />

      {/* Animated toggle (copolitan-style) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
        <AnimatedToggle
          activeTab={active}
          onToggle={(tab) => setActive(tab)}
        />
      </div>

      <div>
        {active === "signin" ? (
          <div style={{
            marginRight: "clamp(1rem, 0rem + 3.125vw, 3rem)",
            marginLeft: "clamp(1rem, 0rem + 3.125vw, 3rem)",
            marginBottom: "clamp(1rem, 0rem + 3.125vw, 3rem)"
          }}>
            <div className="flex flex-row ml-auto h-full w-full">

              {/* Auth Layout */}
              <AuthLayout backgroundImage={backgroundImage}>
                <LoginEdit />
              </AuthLayout>

              {/* Right-side Buttons (icons) */}
              <div className="flex flex-col" style={{ marginLeft: "8px", gap: "8px" }}>
                {/* Upload (opens modal) */}
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  style={buttonStyle}
                >
                  <Image src="/assets/upload.svg" alt="Arrow" width={20} height={20} />
                </button>

                {/* Preview Fullscreen */}
                <button
                  onClick={() => setPreviewMode(true)}
                  style={buttonStyle}
                >
                  <Image src="/assets/preview.svg" alt="Arrow" width={20} height={16} />
                </button>

                {/* When editing: show Back + Save, but keep Publish icon visible */}
                {isEditingImage ? (
                  <>
                    <button onClick={handleBack} style={buttonStyle}>
                      <Image src="/assets/back.svg" alt="Arrow" width={16} height={16} />
                    </button>
                    
                    <button onClick={handlePublish} style={buttonStyle}>
                      <Image src="/assets/publish.svg" alt="Publish" width={22} height={22} />
                    </button>
                  </>
                ) : (
                  // Default: 3 icons (upload, preview, publish)
                  <button onClick={handlePublish} style={buttonStyle}>
                    <Image src="/assets/publish.svg" alt="Arrow" width={22} height={22} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <ScrollingHeader />
            <div style={{display:'flex',flexDirection:'row'}}>
              <BentoGrid />
            </div>
          </>
        )}
      </div>

      {/* ✅ FULLSCREEN PREVIEW OVERLAY */}
     {previewMode && (
  <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">

    {/* Close Button */}
    <button
      onClick={() => setPreviewMode(false)}
      className="absolute top-6 right-6  p-4 rounded-full cursor-pointer z-[10000]"
    >
      <Image src="/assets/close.svg" alt="Close" width={24} height={24} />
    </button>

    {/* Fullscreen AuthLayout */}
    <div className="relative w-full h-full overflow-auto z-[9998]">
      <AuthLayout backgroundImage={backgroundImage}>
        <LoginEdit/>
      </AuthLayout>
    </div>
  </div>
)}

      {/* Upload Modal (copolitan-style behavior) */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUploadComplete}
      />

      {/* Publish confirmation modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-[20000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[40px] p-10 max-w-[400px] w-full relative flex flex-col items-center text-center shadow-2xl">
            <button
              onClick={() => setShowPublishModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Image src="/assets/close.svg" alt="Close" width={20} height={20} />
            </button>
            <div className="w-32 h-32 mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
                                <g clipPath="url(#clip0_939_3011)">
                                <path d="M173.127 0.288672C173.042 0.315742 172.952 0.278476 172.868 0.309765L4.11754 63.5911C2.26867 64.2865 0.960859 65.96 0.7341 67.9273C0.507342 69.8947 1.39855 71.8205 3.04633 72.9174L40.0424 97.5782L53.5769 154.131C53.6124 154.279 53.7038 154.398 53.7512 154.541C54.9676 158.251 59.6396 159.428 62.4345 156.633L88.9093 130.159L129.609 157.293C132.558 159.27 136.623 157.794 137.607 154.352L179.794 6.69556C180.927 2.72149 177.197 -1.01774 173.127 0.288672ZM66.4051 107.556C65.5318 108.44 65.2688 109.157 64.9626 110.272C64.9587 110.293 64.9496 110.312 64.9457 110.333L59.0612 131.729L50.6772 96.6947L132.354 40.69L66.4051 107.556Z" fill="#7029CF"/>
                                <path d="M35.3691 144.607C33.3093 142.548 29.9719 142.547 27.9121 144.607L1.54486 170.975C-0.514952 173.035 -0.514952 176.372 1.54486 178.432C3.60502 180.492 6.9417 180.492 9.00186 178.432L35.3691 152.064C37.4289 150.005 37.4289 146.667 35.3691 144.607Z" fill="#7029CF"/>
                                <path d="M35.3691 112.967C33.3093 110.907 29.9719 110.907 27.9121 112.967L1.54486 139.334C-0.514952 141.394 -0.514952 144.731 1.54486 146.791C3.60502 148.851 6.9417 148.851 9.00186 146.791L35.3691 120.424C37.4289 118.364 37.4289 115.027 35.3691 112.967Z" fill="#7029CF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_939_3011">
                                <rect width="180" height="180" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
            </div>
            <h2
              className="mb-2 uppercase tracking-tight"
              style={{ color: "var(--black)", fontFamily: "GT Walsheim", fontWeight: 700, fontSize: "18px" }}
            >
              Publish
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: "var(--black)", fontFamily: "GT Walsheim", fontWeight: 600, fontSize: "16px" }}
            >
              Are you sure you want to<br />publish these changes?
            </p>
            <div className="flex gap-4 w-full">
              <button
                onClick={confirmPublish}
                className="flex-1 py-3 rounded-full transition-all active:scale-95"
                style={{ backgroundColor: "var(--hot-purple)", color: "#F7F7F7" }}
              >
                Confirm
              </button>
              <button
                onClick={() => setShowPublishModal(false)}
                className="flex-1 bg-white py-3 rounded-full border-2 transition-all active:scale-95"
                style={{ borderColor: "var(--hot-purple)", color: "var(--hot-purple)" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "var(--hot-purple)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  padding: "8px"
};

export default Page;
