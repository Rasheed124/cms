"use client";

import { subscribeAction } from "@/data/actions";
import { SubscribeProps } from "@/type";
import { useActionState } from "react";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
};

export function Subscribe({
  headline,
  content,
  placeholder,
  buttonText,
}: Readonly<SubscribeProps>) {

  const [formState, formAction] = useActionState(
    subscribeAction,
    INITIAL_STATE
  );

  console.log(formState, "this is our form state coming from useActionState");
  const zodErrors = formState?.zodErrors?.email;
  const strapiErrors = formState?.strapiErrors?.message;

  const errorMessage = strapiErrors || zodErrors || formState?.errorMessage;
  const successMessage = formState?.successMessage;


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white capitalize">
              {headline}
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block dark:text-gray-400">
              {content}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action={formAction} className="sm:flex sm:gap-4" >
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder={errorMessage || successMessage || placeholder}
                   className={`w-full rounded-md border-gray-200 bg-white text-black p-3 shadow-xs transition focus:ring-0 focus:outline-hidden  ${errorMessage ? "border-red-600 text-red-600" : ""}`}
               
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> {buttonText} </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
