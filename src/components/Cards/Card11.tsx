'use client'

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from "../Button";

interface Card11Props {
  title: string;
  description: string;
  color: string;
}

const Card11 = ({ title, description, color }: Card11Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`col-start-6 col-end-11 row-start-8 row-end-13`}
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
          {/* FRONT FACE */}
          <div className="flip-front">
            <div style={{ minHeight: 0 }}>
              <h2
                className="card-title-lg whitespace-pre-line"
                style={{ color: "var(--purple)" }}
              >
                {title}
              </h2>

              <p
                className="card-description-lg mt-2 mb-2"
                style={{ color: "var(--purple)" }}
              >
                {description}
              </p>
            </div>

            <div className="self-end mt-auto">
              <ButtonRounded />
            </div>
          </div>

          {/* BACK FACE */}
          <div
            className="flip-back card-bg"
            style={{
              backgroundColor: "var(--black)",
              padding: "1rem",
            }}
          >
            <p
              className="card-description-lg"
              style={{
                marginBottom: "24px",
                color: "var(--white)",
                fontSize: 'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
                textTransform: 'capitalize',
              }}
            >
              Configure & personalize modules settings for optimal space management.
            </p>

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
                    backgroundColor: "var(--skin-pink)",
                    color: "var(--hot-purple)",
                  }}
                >
                  Homepage
                </button>

                <button
                  className="card-button"
                  style={{
                    backgroundColor: "var(--hot-purple)",
                    color: "var(--skin-pink)",
                  }}
                >
                  Permissions
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
                    src="/assets/icon-card11.svg"
                    alt="planet"
                    width={16}
                    height={16}
                  />
                </span>
                <button
                  className="card-button btn"
                  style={{
                    backgroundColor: "var(--skin-pink)",
                    color: "var(--hot-purple)",
                  }}
                >
                  Property Management
                </button>

                <button
                  className="card-button"
                  style={{
                    backgroundColor: "var(--hot-purple)",
                    color: "var(--skin-pink)",
                  }}
                >
                  Dynamic Lists
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
                    src="/assets/star.svg"
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
        // NOT AUTHORIZED VIEW
        <div
          className=" rounded-lg"
          style={{
            width: "100%",
            height: "100%",
            borderRadius:'24px',
            backgroundColor: "var(--skin-pink)",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          
          <Image
            className="mt-auto "style={{borderRadius:'clamp(0px, 24px + (1240px - 100vw), 24px)'}}
            src="/assets/card11.svg"
            alt="locked"
            width={472}
            height={250}
          />
        </div>
      )}
    </div>
  );
};

export default Card11;
