import { HeroSectionProps } from "@/type";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";

export function HeroSection({
  theme,
  heading,
  cta,
  image,
  logo,
  author,
  publishedAt,
  darken = false,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="relative lg:grid lg:h-screen lg:place-content-center">
      {/* Background Image */}
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={500}
        width={600}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay if enabled */}
      {darken && <div className="absolute inset-0 bg-black opacity-50"></div>}

      <div className="relative mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {heading}
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-300 sm:text-lg/relaxed">
            {author && `By ${author} |`} {publishedAt}
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            {cta && (
              <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
                <button
                  className={`px-6 py-3 text-white font-medium rounded-lg shadow-md transition duration-300 ${
                    theme === "turquoise"
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  {cta.text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
