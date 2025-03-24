import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiUrl } from "@/utils/get-strapi-url";

export async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiUrl();

  const url = new URL(path, BASE_URL);

  const response = await fetchAPI(url.href, { method: "GET" });

  return response;
}
