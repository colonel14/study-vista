import { destinations } from "@/constants";
import Image from "next/image";
import React from "react";

async function DestinationDetail({ params: { destTitle } }) {
  const destination = destinations.find(
    (destination) => destination.country === destTitle
  );

  return (
    <div className="destionation__detail">
      <div className="destination__hero">
        <div className="container">
          <div className="destination__hero-text">
            <h1 className="destination__title">{destination.title}</h1>
            <p className="p__text">{destination.description}</p>
          </div>
        </div>
      </div>
      <div className="destination__placeholder">
        <Image
          src={destination.placeholder}
          width={1000}
          height={400}
          className="destination__placeholder-img object-fit"
          alt="destination placeholder"
          unoptimized
        />
      </div>
      <div className="quick__keys">
        <div className="container">
          <h2 className="quick__keys-title">Quick key figures</h2>
          <div className="quick__keys-list">
            <div className="q__key-box">
              <h4 className="q__key-title">Population</h4>
              <span className="q__key-info">329.5 Million</span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Capital City</h4>
              <span className="q__key-info">
                {destination?.keys?.capitalCity || "Washington, D.C"}
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Currency</h4>
              <span className="q__key-info">
                {destination?.keys?.currency || "$ US Dollar"}
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Tuition Fees</h4>
              <span className="q__key-info">
                Starting from {destination?.keys?.fees || "$12,500"}/Year
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Total Cost of Living</h4>
              <span className="q__key-info">
                {destination?.keys?.totalCost || "$1000-$1500"}/Month
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Intakes</h4>
              <span className="q__key-info">
                {destination?.keys?.intakes || "Fall & Spring"}
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Popular Cities</h4>
              <span className="q__key-info">
                New York, San Francisco, Chicago, Boston
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">International Student Population</h4>
              <span className="q__key-info">
                {destination?.keys?.studentPopulation || "1.1 Million"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
