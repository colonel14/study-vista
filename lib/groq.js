import { groq } from "next-sanity";

export const alldestinationsquery = groq`
*[_type == 'destination']| order(publishedAt asc, _createdAt asc) {
  slug,
  name,
  "thumbnail": thumbnail.asset->url,

 }
`;
export const destinationsquery = groq`
*[_type == "destination" && defined(slug.current)][].slug.current
`;

export const destinationPaginateQuery = groq`
*[_type == "destination"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit]{
  slug,
  name,
  "thumbnail": thumbnail.asset->url,

 }`;

export const singlequery = groq`
    *[_type == 'destination' && slug.current == $slug][0] {
    ..., 
}
`;

export const testimonialsquery = groq`
*[_type == 'testimonial']`;
export const testimonialPaginateQuery = groq`
*[_type == "testimonial"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit]`;
