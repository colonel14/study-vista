import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <div className="about__page">
      <div className="container">
        <div className="app__hero">
          <div className="app__hero-text">
            <h1 className="main__title">
              <span className="text__underline">Who we are?</span>
            </h1>
            <p className="p__text">
              At The Study Vista, we are a leading study abroad agency dedicated
              to helping students pursue their educational dreams at top
              universities worldwide. We specialize in assisting students in
              studying at prestigious institutions in countries such as the UK,
              USA, Canada, Netherlands, Spain, Germany, Australia, and the UAE.
              With our extensive network of partner institutions, we provide
              students with a wide range of options to pursue their desired
              fields of study.
            </p>
          </div>
        </div>
        <Stats />
        <div className="about__section">
          <div className="section__header">
            <h2 className="headtext">
              Embark on a global <br /> education journey
            </h2>
            <p className="p__text">
              At The Study Vista, we&apos;re more than just a study abroad
              agency. We are your trusted partners throughout your journey. Our
              experienced team of educational consultants is committed to
              providing personalized guidance and support to help you navigate
              the study abroad process. We take the time to understand your
              academic goals, career aspirations, and preferences, ensuring that
              we recommend universities and programs that align with your
              individual needs.
            </p>
          </div>
        </div>
      </div>
      <div className="about__cta">
        <div className="container">
          <div className="about__cta-in">
            <Image
              src="/cta-shape.png"
              width={1000}
              height={286}
              className="about__cta-shape"
              alt="shape"
              unoptimized
            />
            <h2 className="headtext">
              The study vista
              <br />
              <span className="highlight__color">Company profile</span>
            </h2>
            <Link href="/" className="app__btn app__btn-outline app__btn-lg">
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default AboutPage;
