import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";

function Destinations({ destinations, columnCount = 5 }) {
  return (
    <div>
      <div
        className="destinations__list"
        style={{ "--columns-count": columnCount }}
      >
        {destinations.map((destination, idx) => (
          <Link
            key={idx}
            href={`/destinations/${destination?.slug?.current}`}
            className="destination__link"
          >
            <Image
              src={urlFor(destination.thumbnail)?.url()}
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
