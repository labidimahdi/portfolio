import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/profile.png"
            alt="logo"
            width={60}
            height={60}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          {" Labidi Mahdi"}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" Software Engineer"}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        <Link href={"https://www.facebook.com/profile.php?id=100010234684162"}>
          <Image src="/facebook.svg" alt="fb" width={30} height={30} />
        </Link>
        <Link href={"https://www.instagram.com/mahdi.labidii/"}>
          <Image src="/instagram.svg" alt="insta" width={30} height={30} />
        </Link>
        <Link href={"https://github.com/labidimahdi"}>
          <Image src="/gi.png" alt="github" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
