"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1 = email, 2 = mail sent, 3 = new password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const router = useRouter();

  const handleSend = () => {
    if (!email) return alert("Please enter your email");
    setStep(2); // go to mail sent page
  };

  const handleGoToReset = () => {
    setStep(3); // go to new password page
  };

  const conditions = {
    uppercaseLowercase: /(?=.*[a-z])(?=.*[A-Z])/.test(newPassword),
    minLength: newPassword.length >= 8,
    number: /[0-9]/.test(newPassword),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
  };

    const handleSave = () => {
    // After saving password
    router.push("/auth/success");
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
        {/* ---------------- HEADER ONLY IN STEP 1 & STEP 3 ---------------- */}
        {(step === 1 || step === 3) && (
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
            />
          </div>
        )}

        {/* ---------------- STEP 1: EMAIL ---------------- */}
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

            <div className="w-full mb-4">
              <label className="card-description-sm" style={{ color: "#9E9E9E" }}>
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

        {/* ---------------- STEP 2: MAIL SENT PAGE (NO HEADER) ---------------- */}
        {step === 2 && (
          <div className="flex flex-col items-center w-full text-center">
            <Image src="/assets/Mailheader.svg" alt="mail" width={418} height={226} />

            <h2
              className="card-title-md font-semibold mt-6"
              style={{ color: "var(--hot-purple)" }}
            >
              Reset password!
            </h2>

            <p
              className="card-description-md mt-2"
              style={{ color: "var(--black)", fontSize: 'clamp(0.625rem, -0.125rem + 1.1719vw, 1.1rem)' }}
            >
              We’ve received your request to change your password.
            </p>

            <p
              className="mt-4"
              style={{ color: "var(--focus-border)", fontSize: '14px' }}
            >
              Click on the button below to reset your password, you have 24 hours before it expires. <br />
              After that you will have to request for a new one.
            </p>

            <button
              onClick={handleGoToReset}
              style={{
                backgroundColor: "var(--hot-purple)",
                width: "182px",
                height: "48px",
                borderRadius: "1536px",
                color: "var(--background)",
                cursor: "pointer",
                marginTop: "40px",
              }}
            >
              Reset Password
            </button>
            <div style={{height:"1px", background:"var(--hot-purple)", marginBottom:"12px",marginTop:"32px",width:"100%"}}></div>
             <div style={{display:'flex', justifyContent:'center', gap:'24px',
              flexDirection:'row'
             }}>
                <Image
                  src="/assets/linked.svg"
                  alt="linkedin"
                  width={25}
                  height={25}/>
                  <Image
                  src="/assets/instagram.svg"
                  alt="instagram"
                  width={25}
                  height={25}/>
             </div>
             <div style={{height:"1px", background:"var(--hot-purple)", margin:"12px 0",width:"100%"}}></div>
             <p className="card-description-sm" style={{ color: "#9E9E9E", fontSize: '11px' }}>
              Sent from <span style={{color:"var(--hot-purple)"}}>Moca</span><br/> Together, We Reshape The Future of Work..
             </p>
          </div>
        )}

        {/* ---------------- STEP 3: NEW PASSWORD ---------------- */}
        {step === 3 && (
          <div className="flex flex-col items-center w-full">
            {/* New Password */}
            <div className="w-full mb-4">
              <label
                className="card-description-sm"
                style={{ color: "#9E9E9E" }}
              >
                New Password
              </label>

              <div className="mt-2 w-full flex items-center rounded-full px-4 py-3 border border-gray-300">
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

              {newPassword.length > 0 && (
                <div className="text-sm mt-2 space-y-1">
                  {[
                    {
                      label: "At least 1 Uppercase & 1 lowercase character",
                      valid: conditions.uppercaseLowercase,
                    },
                    {
                      label: "At least 8 Characters",
                      valid: conditions.minLength,
                    },
                    {
                      label: "At least 1 Number",
                      valid: conditions.number,
                    },
                    {
                      label: "At least 1 Special character",
                      valid: conditions.specialChar,
                    },
                  ].map((item, i) => (
                    <p
                      key={i}
                      className={`flex items-center gap-2 ${
                        item.valid ? "text-[#00B576]" : "text-[#9E9E9E]"
                      }`}
                    >
                      <Image
                        src={item.valid ? "/assets/Correct.svg" : "/assets/Wrong.svg"}
                        alt="status"
                        width={14}
                        height={14}
                      />
                      {item.label}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="w-full mb-6">
              <label className="card-description-sm" style={{ color: "#9E9E9E" }}>
                Confirm Password
              </label>

              <div className="mt-2 w-full flex items-center rounded-full px-4 py-3 border border-gray-300">
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
