import Image from "next/image";
import Link from "next/link";

function Destinations({ destinations, columnCount = 5 }) {
  return (
    <div>
      <div
        className="destinations__list"
        style={{ "--columns-count": columnCount }}
      >
        {destinations.map((destination) => (
          <Link
            key={destination.country}
            href={`/destinations/${destination.country}`}
            className="destination__link"
            style={{ "--row-start": destination.rowStart }}
          >
            <Image
              src={destination.image}
              fill
              alt="country placeholder"
              unoptimized
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
