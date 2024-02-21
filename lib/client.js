import {
  alldestinationsquery,
  destinationPaginateQuery,
  destinationsquery,
  singlequery,
  testimonialPaginateQuery,
  testimonialsquery,
} from "./groq";
import { client } from "@/sanity/lib/client";

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

export async function getAllDestinationsSlugs() {
  if (client) {
    const slugs =
      (await client.fetch(destinationsquery, { cache: "no-store" })) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
export async function getAllDestinations() {
  return (
    (await client.fetch(alldestinationsquery, { cache: "no-store" })) || []
  );
}

export async function getPaginatedDestinations(limit) {
  if (client) {
    return (
      (await client.fetch(
        destinationPaginateQuery,
        {
          pageIndex: 0,
          limit: limit,
        },
        { next: { revalidate: 60 } }
      )) || {}
    );
  }
  return {};
}

export async function getDestinationBySlug(slug) {
  return (
    (await client.fetch(singlequery, { slug }, { next: { revalidate: 60 } })) ||
    {}
  );
}

export async function getAllTestimonials() {
  return (await client.fetch(testimonialsquery, { cache: "no-store" })) || [];
}

export async function getPaginatedTestimonials(limit) {
  if (client) {
    return (
      (await client.fetch(
        testimonialPaginateQuery,
        {
          pageIndex: 0,
          limit: limit,
        },
        { cache: "no-store" }
      )) || {}
    );
  }
  return {};
}
