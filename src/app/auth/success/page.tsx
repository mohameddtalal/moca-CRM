"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div
      className="flex"
      style={{
        flex: 1,
        position: "relative",
        zIndex: "1",
        justifyContent: "end",
        marginRight: "180px",
      }}
    >
      <div
        className="bg-white card-bg flex flex-col items-center"
        style={{
          padding: "clamp(1.5rem, -0.1304rem + 3.2609vw, 3rem)",
          width: "clamp(15.625rem, 1.7663rem + 27.7174vw, 28.375rem)",
        }}
      >
        {/* Title */}
        <div className="text-center justify-center items-center mb-10">
          <p
            className="text-[34px]"
            style={{ fontFamily: "Athena Signature", color: "var(--hot-purple)" }}
          >
            hello
          </p>

          <Image
            src="/assets/Asset1.svg"
            alt="logo"
            width={115}
            height={24}
            style={{ display: "flex", justifyContent: "center" ,marginBottom:'100px'}}
          />
        </div>
        <div className="text-center w-full">
            <h2
              className="card-title-md font-semibold"
              style={{ color: "var(--hot-purple)", marginBottom: "8px" }}
            >
             New Password <br/>Successfully Changed
            </h2>

            <p
              className="card-description-sm"
              style={{ color: "#565656", lineHeight: "1.6", marginBottom: "40px" }}
            >
             You can now use your new password
               to login to your account.
            </p>
            </div>

       
        {/* Sign In */}
        <button
         onClick={() => router.push("/dashboard")} 
          style={{
            backgroundColor: "var(--hot-purple)",
            width: "182px",
            height: "48px",
            borderRadius: "1536px",
            color: "#F7F7F7",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Page;
