import Destinations from "@/components/Destinations";
import React from "react";

const destinations = [
  {
    country: "germany",
    image: "/destination-germany.png",
    rowStart: 0,
  },
  {
    country: "canada",
    image: "/destination-canada.png",
    rowStart: 2,
  },
  {
    country: "uk",
    image: "/destination-uk.png",
    rowStart: 1,
  },
  {
    country: "usa",
    image: "/destination-usa.png",
    rowStart: 2,
  },
  {
    country: "dubai",
    image: "/destination-dubai.png",
    rowStart: 0,
  },
];

function HomeDestinations() {
  return (
    <div>
      <Destinations destinations={destinations} />
    </div>
  );
}

export default HomeDestinations;
