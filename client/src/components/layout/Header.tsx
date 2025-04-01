"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";
import { LinkProps, LogoProps }  from "@/type";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const headerLight = pathname === "/experience";

  if (!data) return null;

  const { logo, navigation, cta } = data;
  return (
    <>
      <header className="bg-white sticky top-0 z-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <StrapiImage
                  src={logo.image.url}
                  alt={
                    logo.image.alternativeText || "No alternative text provided"
                  }
                  className="w-10"
                  // className={`header__logo header__logo--${
                  //   headerLight ? "white" : "black"
                  // }`}
                  width={120}
                  height={120}
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {navigation.map((item) => (
                    <li
                      className="text-gray-500 transition hover:text-gray-500/75"
                      key={item.id}
                    >
                      <Link
                        href={item.href}
                        target={item.isExternal ? "_blank" : "_self"}
                      >
                        <h5>{item.text}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  href={cta.href}
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  target={cta.isExternal ? "_blank" : "_self"}
                >
                  <button className="">{cta.text}</button>
                </Link>

              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
