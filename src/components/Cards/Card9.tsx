'use client'

import { useState } from 'react'
import { ButtonSmall } from "../Button_sm";
import Image from 'next/image';

interface Card9Props {
  title: string;
  description: string;
  color: string;
}

const Card9 = ({ title, description, color }: Card9Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true); // added

   const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="col-start-1 col-end-3 row-start-10 row-end-13"
      style={{ width: "100%" }}
    >
      {isAuthorized ? (
        <div
          // onClick={handleFlip}
           className={`flip-wrapper ${color} rounded-lg card-bg`}
          style={{
            // transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            cursor: "default",
          }}
        >
          {/* FRONT */}
          <div className="flip-front">
            <div>
              <h2
                className="card-title-sm whitespace-pre-line"
                style={{ color: "var(--black)" }}
              >
                {title}
              </h2>

              <p
                className="card-description-sm mt-2"
                style={{ color: "var(--black)" }}
              >
                {description}
              </p>
            </div>

            <div className="self-end mt-auto">
              <ButtonSmall />
            </div>
          </div>

          {/* BACK */}
          <div
            className="flip-back card-back-shadow"
            style={{ backgroundColor: "var(--black)", padding: "1rem" }}
          >
            <p
              className="card-description-sm"
              style={{
                marginBottom: "24px",
                color: "var(--white)",
                fontSize: 'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
                textTransform: 'capitalize'
              }}
            >
              {description}
            </p>

            <div className="card-back-scroller overflow-y-scroll">
              <div style={{ display: "inline-flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  className="card-button btn"
                  style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
                >
                  Label
                </button>

                <button
                  className="card-button"
                  style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
                >
                  Label
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
                  <Image src="/assets/icon-card9.svg" alt="icon" width={16} height={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // NOT AUTHORIZED VIEW
        <div
          className="card-bg rounded-lg"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--energy-green)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        
          <Image
            src="/assets/card9.svg"
            alt="locked"
            width={140}
            height={212}
          />
        </div>
      )}
    </div>
  );
};

export default Card9;
