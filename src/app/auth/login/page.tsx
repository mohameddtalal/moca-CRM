"use client";

import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Invalid E-mail");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Wrong password");
      valid = false;
    }

    if (!valid) return;

    console.log("Logging in...");
  };

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
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>

        {/* Email */}
        <div className="w-full mb-4">
          <label className="card-description-sm" style={{ color: "#9E9E9E" }}>
            E-Mail
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontSize: "12px", color: "var(--black)" }}
            className={`
              w-full mt-2 px-4 py-3 rounded-full outline-none
              border 
              ${
                emailError
                  ? "border-[var(--wrong-border)] text-[var(--wrong-border)]"
                  : "border-gray-300 focus-within:border-black"
              }
            `}
            placeholder="Enter email address"
          />

          {emailError && (
            <p className="text-[var(--wrong-border)] card-description-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Password */}
        <div className="w-full mb-2">
          <label className="card-description-sm" style={{ color: "#9E9E9E" }}>
            Password
          </label>

          <div
            className={`
              mt-2 w-full flex items-center rounded-full px-4 py-3 border
              ${
                passwordError
                  ? "border-[var(--wrong-border)]"
                  : "border-gray-300 focus-within:border-black"
              }
            `}
          >
            {/* INPUT */}
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "var(--black)",
              }}
              className={`
                flex-1 outline-none
                ${
                  passwordError
                    ? "text-[var(--wrong-border)]"
                    : "text-[#9E9E9E]"
                }
              `}
              placeholder="Enter Password"
            />

            {/* Eye Icon */}
            <Image
              src={
                passwordError
                  ? "/assets/EyeRed.svg"
                  : showPassword
                  ? "/assets/OpenEye.svg"
                  : "/assets/Eyeclosed.svg"
              }
              alt="eye"
              width={14}
              height={14}
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {passwordError && (
            <p className="text-[var(--wrong-border)] card-description-sm mt-1">
              {passwordError}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <button
          className="mt-2"
          style={{
            fontSize: "14px",
            color: "#565656",
            fontWeight: "600",
            marginBottom: "16px",
            cursor: "pointer",
          }}
        >
          Forget Password?
        </button>

        {/* Sign In */}
        <button
          onClick={handleLogin}
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

        {/* Footer */}
        <div
          className="mt-10 text-center text-sm leading-relaxed flex justify-center items-center gap-1 flex-wrap card-description-sm"
          style={{ color: "#9E9E9E" }}
        >
          <span>Logging in is just the start</span>
          <Image src="/assets/hand.svg" alt="quote" width={12} height={12} />
          <span>The real magic is inside!</span>
          <Image src="/assets/hand2.svg" alt="quote" width={12} height={12} />
          <span>Hit that button and let’s blast off!</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
