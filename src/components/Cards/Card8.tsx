'use client'

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from "../Button";

interface Card8Props {
  title: string;
  description: string;
  color: string;
}

const Card8 = ({ title, description, color }: Card8Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`col-start-11 col-end-13 row-start-6 row-end-13`}
      style={{ width: '100%' }}
    >
      {isAuthorized ? (
        <div
          onClick={handleFlip}
          className={`flip-wrapper ${color} rounded-lg card-bg`}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >

          {/* ---------- FRONT FACE (KEEP ORIGINAL TEXT STYLE) ---------- */}
          <div className="flip-front">
            <div style={{ minHeight: 0 }}>
              <h2
                className="card-title-lg whitespace-pre-line"
                style={{ color: "var(--black)" }}
              >
                {title}
              </h2>

              <p
                className="card-description-lg mt-2"
                style={{ color: "var(--black)" }}
              >
                {description}
              </p>
            </div>

            <div className="self-end mt-auto">
              <ButtonRounded />
            </div>
          </div>

          {/* ---------- BACK FACE (MIRRORING CARD6 STRUCTURE) ---------- */}
          <div
            className="flip-back card-back-shadow"
            style={{
              backgroundColor: "var(--black)",
            }}
          >

            {/* Back description */}
            <p
              className="card-description-lg"
              style={{
                marginBottom: "24px",
                color: "var(--white)",
                fontSize:'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
                textTransform:'capitalize'
               
              }}
            >
           Configure & personalize modules settings for optimal space management.
            </p>

            {/* Scrollable tag section */}
            <div className="card-back-scroller overflow-y-scroll">
              <div
                style={{
                  display: "inline-flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="card-button btn"
                  style={{
                    backgroundColor: "var(--yellow)",
                    color: "var(--black)",
                  }}
                >
                  label
                </button>

                <button
                  className="card-button"
                  style={{
                    backgroundColor: "var(--purple)",
                    color: "var(--skin-pink)",
                  }}
                >
                  label
                </button>

                <span
                  className="card-button"
                  style={{
                    backgroundColor: "#F7f7f7",
                    color: "#2c2c2c",
                    borderRadius: "99999px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Image
                    src="/assets/icon-card8.svg"
                    alt="planet"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div
          className="card-bg rounded-lg"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--yellow)",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
           <p
              className="card-title-lg"
              style={{
                marginBottom: "24px",
                color: "var(--black)",
               
              }}
            >
           Lead the Change. Be the Future.
            </p>
          <Image
            className="mt-auto"
            src="/assets/card8.svg"
            alt="sea"
            width={120}
            height={188}
          />
        </div>
      )}
    </div>
  );
};

export default Card8;
