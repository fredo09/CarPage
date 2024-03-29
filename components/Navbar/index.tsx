import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./../CustomButton";

export const Navbar: FC = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-6">
        <Link href="/" className="flex justify-between item-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[10px]"
        />
      </nav>
    </header>
  );
};
