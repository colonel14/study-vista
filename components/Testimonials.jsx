import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { getAllTestimonials } from "@/lib/client";

async function Testimonials() {
  const testimonials = (await getAllTestimonials()) || [];
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
                {testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="testimonial__box">
                        <p className="testimonial__box-message">
                          {item.comment}
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
                              {item?.name}
                            </h4>
                            <span className="testimonial__box-position">
                              {item?.position}
                            </span>
                            {item?.rating && (
                              <div className="testimonial__box-rating">
                                {Array.from({
                                  length: item.rating,
                                }).map((_, index) => (
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
                                {Array.from({ length: 5 - item.rating }).map(
                                  (_, index) => (
                                    <Image
                                      key={index}
                                      src="/star-off.svg"
                                      width={28}
                                      height={27}
                                      className="testimonial-star"
                                      alt="star"
                                      unoptimized
                                    />
                                  )
                                )}
                              </div>
                            )}
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
