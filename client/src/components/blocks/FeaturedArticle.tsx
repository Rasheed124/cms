import { FeaturedArticleProps } from "@/type";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import ReactMarkdown from "react-markdown";

export function FeaturedArticle({
  headline,
  link,
  excerpt,
  image,
}: Readonly<FeaturedArticleProps>) {
  return (
    <>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {headline}
            </h1>

            <div className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              <ReactMarkdown>{excerpt}</ReactMarkdown>
            </div>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                href={link.href}
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              >
                {link.text}
              </Link>
            </div>
          </div>

          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            height={6000}
            width={600}
          />
        </div>
      </section>
    </>
  );
}
