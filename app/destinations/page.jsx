import Destinations from "@/components/Destinations";
import React from "react";

const destinations = [
  {
    country: "usa",
    image: "/destination-usa.png",
    rowStart: 0,
  },
  {
    country: "uk",
    image: "/destination-uk.png",
    rowStart: 2,
  },
  {
    country: "australia",
    image: "/destination-australia.png",
    rowStart: 2,
  },
  {
    country: "canada",
    image: "/destination-canada.png",
    rowStart: 0,
  },
  {
    country: "spain",
    image: "/destination-spain.png",
    rowStart: 0,
  },
  {
    country: "netherlands",
    image: "/destination-netherland.png",
    rowStart: 2,
  },
  {
    country: "dubai",
    image: "/destination-dubai.png",
    rowStart: 2,
  },
  {
    country: "germany",
    image: "/destination-germany.png",
    rowStart: 0,
  },
];

function DestinationsPage() {
  return (
    <div className="destinations__page">
      <div className="container">
        <div className="app__hero">
          <div className="app__hero-text">
            <h1 className="main__title">
              Explore exciting study <br /> abroad destinations
            </h1>
            <p className="p__text">
              At The Study Vista, we believe that studying abroad offers a
              transformative experience that combines academic excellence with
              cultural immersion. We are delighted to present a range of
              exciting study destinations that provide exceptional educational
              opportunities for students like you. Discover the world and
              broaden your horizons with our carefully selected destinations:
            </p>
          </div>
        </div>
        <Destinations destinations={destinations} columnCount={4} />
      </div>
    </div>
  );
}

export default DestinationsPage;
