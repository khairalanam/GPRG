import Image from "next/image";
import React from "react";
import logo from "@public/Main-Logo.svg";
import Link from "next/link";

const Nav: React.FC = (): React.JSX.Element => {
  return (
    <nav className="flex bg-dark-blue px-6 md:px-10 text-white py-4 lg:px-20 lg:py-5 justify-between items-center">
      <section className="flex justify-between items-center gap-3">
        <Image
          alt="GPRG Logo"
          src={logo}
          width={100}
          height={100}
          className="w-8 md:w-10 lg:w-11"
        />
        <h1 className="font-light text-[0.75rem] md:text-[1rem] lg:font-normal lg:text-[1.25rem]">
          GPRG
        </h1>
      </section>
      <ul className="flex justify-between gap-3 md:gap-4 lg:gap-6 text-[0.75rem] md:text-[1rem]">
        <li>
          <Link href="/" className="hover:text-slate-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-slate-500 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/github" className="hover:text-slate-500 transition">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/socials" className="hover:text-slate-500 transition">
            Socials
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
