import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <div className="contact__page">
      <div className="container">
        <div className="contact__page-in">
          <div className="contact__info">
            <div className="app__hero">
              <div className="app__hero-text">
                <h1 className="main__title">
                  We&apos;re excited to help <br /> you take the next step
                </h1>
                <p className="p__text">
                  We&apos;re excited to hear from you! At The Study Vista,
                  we&apos;re committed to providing exceptional service and
                  personalized support to help you achieve your study abroad
                  goals. Whether you have questions, need guidance, or want to
                  get started on your journey, our friendly team is here to
                  assist you. Choose the most convenient way to reach us:
                </p>
              </div>
              <Link href="tel:+20123456789" className="contact__link">
                <Image
                  src="/contact-shape.png"
                  width={400}
                  height={48}
                  className="contact__link-shape"
                  alt="contact-shape"
                  unoptimized
                />
                <Image
                  src="/phone-icon.svg"
                  width={21}
                  height={21}
                  className="contact__link-icon"
                  alt="phone icon"
                  unoptimized
                />
                +10 012 345 6789
              </Link>
              <Link
                href="mailto:Support@thestudyvista.com"
                className="contact__link"
              >
                <Image
                  src="/contact-shape.png"
                  width={400}
                  height={48}
                  className="contact__link-shape"
                  alt="contact-shape"
                  unoptimized
                />
                <Image
                  src="/mail-icon.svg"
                  width={21}
                  height={21}
                  className="contact__link-icon"
                  alt="mail icon"
                  unoptimized
                />
                Support@thestudyvista.com
              </Link>
            </div>
          </div>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
