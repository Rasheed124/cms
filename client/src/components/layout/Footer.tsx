import { LinkProps, LogoProps } from "@/type";
import Link from "next/link";
import React from "react";
import { StrapiImage } from "../StrapiImage";

interface FooterProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    policies: LinkProps[];
    copy: string;
  };
}

export function Footer({ data }: FooterProps) {
  if (!data) return null;

  const { logo, navigation, policies, copy } = data;
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600 dark:text-teal-300">
              <StrapiImage
                src={logo.image.url}
                alt={logo.image.alternativeText || "No alternative text"}
                width={100}
                height={100}
           
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8 lg:mt-0  lg:gap-y-16">
          

              <div className="">
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        href={item.href}
                        target={item.isExternal ? "_blank" : "_self"}
                      >
                        {<h5>{item.text}</h5>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} {copy}
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                {policies.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      target={item.isExternal ? "_blank" : "_self"}
                      className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
