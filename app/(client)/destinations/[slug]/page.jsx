import { destinations } from "@/constants";
import { getAllDestinationsSlugs, getDestinationBySlug } from "@/lib/client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import React from "react";

export const revalidate = 3600; // revalidate the data at most every hour

export async function generateStaticParams() {
  return await getAllDestinationsSlugs();
}

export async function generateMetadata({ params }) {
  const destination = await getDestinationBySlug(params.slug);
  return { title: destination.name };
}

async function DestinationDetail({ params: { slug } }) {
  const destination =
    (await getDestinationBySlug(slug)) ||
    destinations.find((item) => item.country == slug);

  return (
    <div className="destionation__detail">
      <div className="destination__hero">
        <div className="container">
          <div className="destination__hero-text">
            <h1 className="destination__title">{destination.name}</h1>
            <p className="p__text">{destination.description}</p>
          </div>
        </div>
      </div>
      <div className="destination__placeholder">
        <Image
          src={urlFor(destination?.placeholder)?.url()}
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
              <span className="q__key-info">{destination?.population}</span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Capital City</h4>
              <span className="q__key-info">
                {destination?.capitalCity || "Washington, D.C"}
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Currency</h4>
              <span className="q__key-info">
                {destination?.currency || "$ US Dollar"}
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Tuition Fees</h4>
              <span className="q__key-info">
                Starting from ${destination?.fees || "$12,500"}/Year
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
                {destination?.intakes || "Fall & Spring"}
              </span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">Popular Cities</h4>
              <span className="q__key-info">{destination?.popularCities}</span>
            </div>
            <div className="q__key-box">
              <h4 className="q__key-title">International Student Population</h4>
              <span className="q__key-info">
                {destination?.studentPopulation || "1.1 Million"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
