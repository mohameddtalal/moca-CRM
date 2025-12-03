'use client';
import { useState } from "react";
import NavbarDynamic from "@/components/NavbarDynamic";
import BentoGrid from "@/components/BentoGrid-edit";
import LoginEdit from "@/components/LoginEdit";
import ScrollingHeader from "@/components/ScrollingHeader";
import AuthLayout from "../auth/layout";
import Image from "next/image";

const Page = () => {
  const [active, setActive] = useState<"signin" | "home">("signin");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [previousBackground, setPreviousBackground] = useState<string | null>(null);

  const handlePublish = () => {
  if (!backgroundImage) return;

  // Save it permanently
  localStorage.setItem("published-login-bg", backgroundImage);

  alert("Published! Background updated.");
};


 const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  setBackgroundImage(url);
};


const handleBack = () => {
  setBackgroundImage(null); // null → AuthLayout shows its own default background
};



  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <NavbarDynamic />

      {/* Toggle Buttons */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
        <div
          style={{
            backgroundColor: "var(--navbar)",
            borderRadius: "50px",
            padding: "5px 16px",
            display: "flex",
            gap: "8px",
          }}
        >
          <button
            onClick={() => setActive("signin")}
            style={{
              backgroundColor: active === "signin" ? "#434343" : "transparent",
              color: active === "signin" ? "white" : "#434343",
              width: "98px",
              height: "40px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Sign in
          </button>

          <button
            onClick={() => setActive("home")}
            style={{
              backgroundColor: active === "home" ? "#434343" : "transparent",
              color: active === "home" ? "white" : "#434343",
              width: "98px",
              height: "40px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Homepage
          </button>
        </div>
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

              {/* Right-side Buttons */}
              <div className="flex flex-col" style={{ marginLeft: "8px", gap: "8px" }}>
                <input
                  type="file"
                  accept="image/*"
                  id="upload-bg"
                  style={{ display: "none" }}
                  onChange={handleUploadImage}
                />

                {/* Upload */}
                <button
                  onClick={() => document.getElementById("upload-bg")?.click()}
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

                {/* Back */}
                <button onClick={handleBack} style={buttonStyle}>
                  <Image src="/assets/back.svg" alt="Arrow" width={16} height={16} />
                </button>



                {/* Publish */}
                <button onClick={handlePublish} style={buttonStyle}>
                  <Image src="/assets/publish.svg" alt="Arrow" width={22} height={22} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ScrollingHeader />
            <BentoGrid />
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
        <LoginEdit />
      </AuthLayout>
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
