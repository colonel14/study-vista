import Image from "next/image";
import React from "react";

function HowWeWork() {
  return (
    <div className="home__how">
      <div className="container">
        <div className="section__header">
          <h2 className="headtext">How we work</h2>
          <p className="p__text">
            At The Study Vista, we understand that pursuing a bachelor&apos;s or
            master&apos;s degree abroad can be an exciting but complex process.
            Our goal is to simplify and streamline your journey by providing
            comprehensive support and guidance every step of the way.
          </p>
        </div>
        <div className="how__steps">
          <Image
            src="/steps-shape.png"
            width={400}
            height={100}
            className="steps__shape"
            alt="steps shape"
            unoptimized
          />
          <div className="step__box">
            <span className="step__box-icon">1</span>
            <span className="step__box-title">
              Find your
              <br /> sutaible degree
            </span>
          </div>
          <div className="step__box">
            <span className="step__box-icon">2</span>
            <span className="step__box-title">
              Apply to
              <br />
              universities
            </span>
          </div>
          <div className="step__box">
            <span className="step__box-icon">3</span>
            <span className="step__box-title">
              get an
              <br />
              acceptence letter
            </span>
          </div>
          <div className="step__box">
            <span className="step__box-icon">4</span>
            <span className="step__box-title">
              get our visa and
              <br /> accommodation support
            </span>
          </div>
          <div className="step__box">
            <span className="step__box-icon">5</span>
            <span className="step__box-title">
              Begin your study
              <br />
              abroad journey
            </span>
          </div>
        </div>
      </div>
      <div className="steps__placeholder">
        <Image
          src="/steps-placeholder.png"
          width={1000}
          height={400}
          className="steps__placeholder-img object-fit"
          alt="steps placeholder"
          unoptimized
        />
      </div>
    </div>
  );
}

export default HowWeWork;
