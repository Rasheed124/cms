export function getStrapiUrl() {
  return process.env.SRAPI_API_URL ?? "http://localhost:1337";
}
