import { InfoBlockProps } from "@/type";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function InfoBlock({
  theme,
  reversed,
  image,
  headline,
  content,
  cta,
}: Readonly<InfoBlockProps>) {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div
        className={`mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-8 lg:py-32 ${
          reversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {headline}
          </h1>

          <div className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* CTA Buttons */}
          {cta && (
            <div className="mt-4 flex gap-4 sm:mt-6">
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
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="relative h-[400px] w-full md:h-full">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            height={500}
            width={600}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
