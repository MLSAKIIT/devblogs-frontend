import React from "react";
import Facebook from "./svgs/Facebook";
import SocialX from "./svgs/SocialX";
import Github from "./svgs/Github";
import Instagram from "./svgs/Instagram";
import Address from "./svgs/Address";
import Email from "./svgs/Email";
import Phone from "./svgs/Phone";
import Fax from "./svgs/Fax";

const Footer = () => {
  return (
    <footer className="bg-lightFooter text-black py-12 dark:bg-darkFooter dark:text-white">
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="container mx-auto text-center col-span-12 md:col-span-6">
          <h2 className="text-xl font-bold mb-4">
            Let’s get started on something great
          </h2>
          <p className="mb-8">
            Join 4,000+ startups already growing with Untitled.
          </p>
          <button className="px-4 py-2 bg-primary text-white rounded-lg">
            Start Free
          </button>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="m-8">
            <ul className="space-y-2 text-center">
              <li>
                <a href="/" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Company
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <h6
            className="mb-2 flex justify-center font-semibold uppercase md:justify-start">
            Contact
          </h6>
          <p className="mb-2 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <Address className="fill-primary" />
            </span>
            City, Country Index, Code
          </p>
          <p className="mb-2 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <Email className="fill-primary" />
            </span>
            devblog@example.com
          </p>
          <p className="mb-2 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <Phone className="fill-primary" />
            </span>
            + 01 234 567 89
          </p>
          <p className="mb-2 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <Fax className="fill-primary" />
            </span>
            + 01 234 567 89
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center px-4 py-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="/">Devblog™</a>. All Rights Reserved.
        </span>
        <div className="flex sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <a
            href="/"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
            data-twe-ripple-init
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <Facebook className="fill-primary" />
            </span>
          </a>
          <a
            href="/"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
            data-twe-ripple-init
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <SocialX className="fill-primary" />
            </span>
          </a>
          <a
            href="/"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
            data-twe-ripple-init
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <Instagram className="fill-primary" />
            </span>
          </a>
          <a
            href="/"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5"
          >
              <Github className="fill-primary" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
