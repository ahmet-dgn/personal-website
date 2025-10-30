"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CustomContainer from "./ui/CustomContainer";
import Image from "next/image";

const navigation = [
  { name: "Home ", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function HeroArea() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <header className="absolute inset-x-0 top-0 z-50">
        <CustomContainer>
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link
                href="/"
                className="-m-1.5 p-1.5 text-blue-800 border-blue-800 border-2 rounded-md"
              >
                <span className="sr-only">Ahmet Can Doğan</span>

                <div className="flex flex-col justify-center items-start ">
                  <span className="font-medium">AHMET</span>
                  <span className="text-2xl tracking-wide">CAN </span>
                </div>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className={` -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 ${
                  mobileMenuOpen ? "hidden" : ""
                }`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-10 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5  text-blue-800 border-blue-800 border-2 rounded-md"
                >
                  <span className="sr-only">Ahmet Can Doğan</span>

                  <div className="flex flex-col justify-center items-start ">
                    <span className="font-medium">AHMET</span>
                    <span className="text-2xl tracking-wide">CAN </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </CustomContainer>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fcd34d] to-[#93c5fd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>



        <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-32 sm:py-48 lg:py-56 mx-auto  w-full">
          <div className="flex rounded-xl justify-center items-center max-w-[500px]  p-8 bg-gray-200  justify-self-center lg:justify-self-end">
            <Image
                src="/images/ahmetcandogan.jpeg"
                alt="ahmet-can-dogan"
                className="rounded-xl shadow-xl  "
                width="400"
                height="400"
            />
          </div>

            <div className="text-left max-w-[500px] justify-self-center lg:justify-self-start">
              <h1 className="!leading-tight text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
                Front-End Developer specializing in E-commerce & Shopify
              </h1>
              <p className="mt-6 text-md  text-gray-600">
                I build modern web applications with React, Next.js, and Remix.js
                with deep expertise in Shopify theme development, app creation,
                and e-commerce solutions.
              </p>
              <p className="mt-4 text-md text-gray-600">
                With a background in graphic design, I bring a designer's
                perspective to creating performant, user-friendly applications.
              </p>
              <p className="mt-4 text-md text-gray-600">
                5+ years experience | Based in Turkey | Fluent in English (C1)
              </p>
              <p className="mt-4 text-md text-gray-600">
                Currently: Front-End Developer at Holly Palm
              </p>


              <div className="mt-6 flex items-center justify-start gap-x-6">
                <Link
                    href="https://github.com/ahmet-dgn"
                    target="_blank"
                    className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/ahmet-can-do%C4%9Fan-90829587/"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
                    target="_blank"
                >
                  Linkedin <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>


        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
