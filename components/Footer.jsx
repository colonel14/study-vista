import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__cta">
        <div className="container">
          <div className="footer__cta-in">
            <h2 className="headtext">
              Ready to Embark on your
              <br />
              study abroad journey?{" "}
              <span className="highlight__color">
                Let <br /> Us Help you get started.
              </span>
            </h2>
            <Link href="/" className="app__btn app__btn-outline app__btn-lg">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="container">
          <Image
            src="/logo-white.svg"
            width={178}
            height={68}
            className="footer__logo"
            alt="logo"
          />
          <div className="footer__main-in">
            <p className="p-text">
              Study Vista is a leading study abroad agency which helps students
              study at top universities abroad, including the UK, USA, Canada,
              Netherlands, Spain, Germany, Australia and the UAE. Our partner
              institutions offer accredited English-teaching programs to ensure
              high-quality education for our students.
            </p>
            <div className="footer__links">
              <div className="footer__col destination__col">
                <h6 className="footer__title">Destnations</h6>
                <div className="footer__destinations">
                  <Link href="/destinations/uk" className="footer__link">
                    uk
                  </Link>
                  <Link href="/destinations/usa" className="footer__link">
                    usa
                  </Link>
                  <Link href="/destinations/canada" className="footer__link">
                    canada
                  </Link>
                  <Link href="/destinations/germany" className="footer__link">
                    Germany
                  </Link>
                  <Link
                    href="/destinations/netherlands"
                    className="footer__link"
                  >
                    Netherlands{" "}
                  </Link>
                  <Link href="/destinations/spain" className="footer__link">
                    Spain{" "}
                  </Link>
                  <Link href="/destinations/australia" className="footer__link">
                    Australia{" "}
                  </Link>
                  <Link href="/destinations/uk" className="footer__link">
                    UAE{" "}
                  </Link>
                </div>
              </div>
              <div className="footer__col">
                <h6 className="footer__title">Destnations</h6>
                <Link href="/about" className="footer__link">
                  About us
                </Link>
                <Link href="/destinations" className="footer__link">
                  Destnations
                </Link>
                <Link href="/contact" className="footer__link">
                  Contact Us
                </Link>
                <Link href="/careers" className="footer__link">
                  careers
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__socials">
              <Image
                src="/facebook-icon.svg"
                width={20}
                height={20}
                className="social-icon"
                alt="facebook icon"
              />
              <Image
                src="/youtube-icon.svg"
                width={20}
                height={20}
                className="social-icon"
                alt="youtube icon"
              />
              <Image
                src="/instagram-icon.svg"
                width={20}
                height={20}
                className="social-icon"
                alt="instagram icon"
              />
              <Image
                src="/linkedin-icon.svg"
                width={20}
                height={20}
                className="social-icon"
                alt="linkedin icon"
              />
              <Image
                src="/twitter-icon.svg"
                width={20}
                height={20}
                className="social-icon"
                alt="twitter icon"
              />
            </div>
            <div className="footer-copyright">
              Copyright © 2024 The Study Vista - All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
