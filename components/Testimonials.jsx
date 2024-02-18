import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Testimonials() {
  return (
    <div className="testimonials__section">
      <div className="container">
        <div className="testimonials__wrapper">
          <Image
            src="/quote-shape.svg"
            className="quote-shape"
            width={200}
            height={200}
            alt="quote"
            unoptimized
          />
          <div className="testimonials__list">
            <h2 className="headtext">What out students says</h2>
            <Carousel className="w-full relative">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="testimonial__box">
                        <p className="testimonial__box-message">
                          &quot;Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Commodo quis imperdiet
                          massa tincidunt nunc pulvinar sapien et. Amet mauris
                          commodo quis imperdiet massa tincidunt nunc. Pretium
                          aenean pharetra magna ac placerat vestibulum lectus
                          mauris. Suspendisse interdum consectetur libero id
                          faucibus nisl tincidunt eget. Mi proin sed libero
                          enim. Augue interdum velit euismod in pellentesque
                          massa placerat duis. Quis viverra nibh cras pulvinar
                          mattis nunc. A diam sollicitudin &quot;
                        </p>
                        <div className="testimonial__box-client">
                          <Image
                            src="/testimonial-avatar.svg"
                            className="testimonial__box-avatar"
                            alt="avatar"
                            width={90}
                            height={90}
                            unoptimized
                          />
                          <div>
                            <h4 className="testimonial__box-name">
                              Hossam fawzy
                            </h4>
                            <span className="testimonial__box-position">
                              lorem ipsum
                            </span>
                            <div className="testimonial__box-rating">
                              {Array.from({ length: 4 }).map((_, index) => (
                                <Image
                                  key={index}
                                  src="/star-fill.svg"
                                  width={28}
                                  height={27}
                                  className="testimonial-star"
                                  alt="star"
                                  unoptimized
                                />
                              ))}
                              <Image
                                key={index}
                                src="/star-off.svg"
                                width={28}
                                height={27}
                                className="testimonial-star"
                                alt="star"
                                unoptimized
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="testiomnial__carousel-controls">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
