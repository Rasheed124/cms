import Link from "next/link";
import { StrapiImage } from "./StrapiImage";

import { ImageProps } from "@/type";
import { formatDate } from "@/utils/format-date";

export interface CardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function Card({
  title,
  description,
  slug,
  image,
  price,
  createdAt,
  startDate,
  basePath,
}: Readonly<CardProps>) {
  return (
    <Link href={`/${basePath}/${slug}`} className="block ">
      <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          width={400}
          height={400}
        />

        <div className="content-items__card-text">
          {price && (
            <p>
              <span>Price: </span>
              {price}
            </p>
          )}
        </div>

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            {(startDate ?? createdAt) && (
              <p>{formatDate(startDate ?? createdAt)}</p>
            )}
          </time>

          <Link href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {description.slice(0, 144)}...
          </p>
        </div>
      </article>
    </Link>
  );
}
