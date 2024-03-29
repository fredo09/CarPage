import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "./../../constants";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-dm:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start item-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => {
            return (
              <div className="footer__link" key={link.title}>
                <h3 className="font-bold">{link.title}</h3>

                {link.links.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      className="text-gray-500"
                      href={item.url}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All rights reserved </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};
