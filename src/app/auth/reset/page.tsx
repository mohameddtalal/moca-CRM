"use client";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1 = email, 2 = new password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSend = () => {
    if (!email) return alert("Please enter your email");
    setStep(2); // show new password fields
  };

  const conditions = {
    uppercaseLowercase: /(?=.*[a-z])(?=.*[A-Z])/.test(newPassword),
    minLength: newPassword.length >= 8,
    number: /[0-9]/.test(newPassword),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
  };

  const handleSave = () => {
    if (!newPassword || !confirmPassword) return alert("Please fill all fields");
    if (newPassword !== confirmPassword) return alert("Passwords do not match");

    console.log("Password saved:", newPassword);
    alert("Password saved successfully!");
    setStep(1); // optionally reset to step 1 or clear fields
  };

  return (
    <div
      className="flex"
      style={{
        flex: 1,
        position: "relative",
        zIndex: 1,
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

        {/* Step 1: Email */}
        {step === 1 && (
          <div className="text-center w-full">
            <h2
              className="card-title-md font-semibold"
              style={{ color: "var(--hot-purple)", marginBottom: "8px" }}
            >
              Reset Your Password
            </h2>

            <p
              className="card-description-sm"
              style={{ color: "#565656", lineHeight: "1.6", marginBottom: "10px" }}
            >
              Enter your Moca email address & we’ll send you instructions to reset your password.
            </p>

            {/* Email Input */}
            <div className="w-full mb-4">
              <label
                className="card-description-sm"
                style={{ color: "#9E9E9E", marginBottom: "8px" }}
              >
                E-Mail
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: "12px" }}
                className="w-full mt-2 mb-2 px-4 py-3 rounded-full border outline-none border-gray-300 focus-within:border-black"
                placeholder="Enter email address"
              />
            </div>

            <button
              onClick={handleSend}
              style={{
                backgroundColor: "var(--hot-purple)",
                width: "182px",
                height: "48px",
                borderRadius: "1536px",
                color: "#F7F7F7",
                cursor: "pointer",
                marginBottom: "80px",
              }}
            >
              Send
            </button>
          </div>
        )}

        {/* Step 2: New Password */}
        {step === 2 && (
          <div className="flex flex-col items-center w-full">
            {/* New Password */}
            <div className="w-full mb-4">
              <label
                className="card-description-sm"
                style={{ color: "#9E9E9E", marginBottom: "4px" }}
              >
                New Password
              </label>
              <div className="mt-2 w-full flex items-center rounded-full px-4 py-3 border border-gray-300 focus-within:border-black">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="flex-1 outline-none text-[#9E9E9E]"
                  style={{ fontSize: "13px", fontWeight: "bold" }}
                />
                <Image
                  src={showNewPassword ? "/assets/OpenEye.svg" : "/assets/Eyeclosed.svg"}
                  alt="toggle password"
                  width={14}
                  height={14}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              </div>

              {/* Password checklist */}
              {newPassword.length > 0 && (
                <div className="text-sm mt-2 space-y-1">
                  <p
                    className={`flex items-center gap-2 ${
                      conditions.uppercaseLowercase ? "text-[#00B576]" : "text-[#9E9E9E]"
                    }`}
                  >
                    <Image
                      src={conditions.uppercaseLowercase ? "/assets/Correct.svg" : "/assets/Wrong.svg"}
                      alt={conditions.uppercaseLowercase ? "Correct" : "Wrong"}
                      width={14}
                      height={14}
                    />
                    At least 1 Uppercase & 1 lowercase character
                  </p>
                  <p
                    className={`flex items-center gap-2 ${
                      conditions.minLength ? "text-[#00B576]" : "text-[#9E9E9E]"
                    }`}
                  >
                    <Image
                      src={conditions.minLength ? "/assets/Correct.svg" : "/assets/Wrong.svg"}
                      alt={conditions.minLength ? "Correct" : "Wrong"}
                      width={14}
                      height={14}
                    />
                    At least 8 Characters
                  </p>
                  <p
                    className={`flex items-center gap-2 ${
                      conditions.number ? "text-[#00B576]" : "text-[#9E9E9E]"
                    }`}
                  >
                    <Image
                      src={conditions.number ? "/assets/Correct.svg" : "/assets/Wrong.svg"}
                      alt={conditions.number ? "Correct" : "Wrong"}
                      width={14}
                      height={14}
                    />
                    At least 1 Number
                  </p>
                  <p
                    className={`flex items-center gap-2 ${
                      conditions.specialChar ? "text-[#00B576]" : "text-[#9E9E9E]"
                    }`}
                  >
                    <Image
                      src={conditions.specialChar ? "/assets/Correct.svg" : "/assets/Wrong.svg"}
                      alt={conditions.specialChar ? "Correct" : "Wrong"}
                      width={14}
                      height={14}
                    />
                    At least 1 Special character
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="w-full mb-6">
              <label
                className="card-description-sm"
                style={{ color: "#9E9E9E", marginBottom: "4px" }}
              >
                Confirm Password
              </label>
              <div className="mt-2 w-full flex items-center rounded-full px-4 py-3 border border-gray-300 focus-within:border-black">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="flex-1 outline-none text-[#9E9E9E]"
                  style={{ fontSize: "13px", fontWeight: "bold" }}
                />
                <Image
                  src={showConfirmPassword ? "/assets/OpenEye.svg" : "/assets/Eyeclosed.svg"}
                  alt="toggle password"
                  width={14}
                  height={14}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              style={{
                backgroundColor: "var(--hot-purple)",
                width: "182px",
                height: "48px",
                borderRadius: "1536px",
                color: "#F7F7F7",
                cursor: "pointer",
                marginBottom: "80px",
              }}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
