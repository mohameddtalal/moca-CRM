'use client'

import { useState } from 'react'
import { ButtonSmall } from "../Button_sm";
import Image from 'next/image';

interface Card2Props {
  title: string;
  description: string;
  color: string;
}

const Card2 = ({ title, description, color }: Card2Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true); // ← added

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="col-start-6 col-end-8 row-start-1 row-end-6"
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
                className="card-title-md whitespace-pre-line"
                style={{ color: "var(--skin-pink)" }}
              >
                {title}
              </h2>

              <p
                className="card-description-sm mt-2 mb-2"
                style={{ color: "var(--skin-pink)" }}
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
                textTransform: 'capitalize',
              }}
            >
              {description}
            </p>

            <div className="card-back-scroller overflow-y-scroll">
              <div style={{ display: "inline-flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  className="card-button btn"
                  style={{ backgroundColor: "var(--skin-pink)", color: "var(--black)" }}
                >
                  Label
                </button>

                <button
                  className="card-button"
                  style={{ backgroundColor: "var(--black)", color: "var(--skin-pink)" }}
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
                  <Image src="/assets/icon-card2.svg" alt="icon" width={16} height={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // NOT AUTHORIZED VIEW
        <div
  className="card-bg "
  style={{
    width: "100%",
    height: "100%",
    backgroundColor: "var(--green)",
    display: "flex",
    flexDirection: "column",
    gap:'40px',
    alignItems: "center",
    justifyContent: "center",
    
  }}
>
  <div style={{ 
    textAlign: "center", 
  }}>
    <span
      className="card-title-sm"
      style={{ color: "var(--skin-pink)" }}
    >
      Behind{" "}
    </span>
    <span
      className="card-title-md"
      style={{ color: "var(--skin-pink)" }}
    >
      Every Productive{" "} <br/>
    </span>
    <span
      className="card-title-md"
      style={{ color: "var(--skin-pink)" }}
    >
      Day{" "}
    </span>
    <span
      className="card-title-sm"
      style={{ color: "var(--skin-pink)" }}
    >
      Is{" "}
    </span>
    <span
      className="card-title-md"
      style={{ color: "var(--skin-pink)" }}
    >
      A{" "} <br/>
    </span>
    <span
      className="card-title-md"
      style={{ color: "var(--skin-pink)" }}
    >
      Great{" "}
    </span>
    <span
      className="card-title-md"
      style={{ color: "var(--skin-pink)" }}
    >
      Team
    </span>
  </div>
  

  
  <Image
  
    src="/assets/card2.svg"
    alt="locked"
    width={110}
    height={54}
  />
</div>
      )}
    </div>
  );
};

export default Card2;
