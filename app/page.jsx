import Destinations from "@/components/Destinations";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import VideoPopup from "@/components/VideoPopup";
import Hero from "@/sections/Home/Hero";
import HomeDestinations from "@/sections/Home/HomeDestinations";
import HomeVideo from "@/sections/Home/HomeVideo";
import HowWeWork from "@/sections/Home/HowWeWork";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <div className="home__destinations">
          <HomeDestinations />
          <Link href="/destinations" className="more__link">
            More Destination
            <Image
              src="/arrow-forward.svg"
              width={21}
              height={7}
              className="arrow-forward"
              alt="arrow forward"
              unoptimized
            />
          </Link>
        </div>
        <Stats />
      </div>
      <HowWeWork />
      <HomeVideo />
      <Testimonials />
      <VideoPopup />
    </div>
  );
}
