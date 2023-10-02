"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from "@public/Main-Logo.svg";
import Link from "next/link";
import Hamburger from 'hamburger-react'

const Nav: React.FC = (): React.JSX.Element => {
  const navElements: { [key: string]: string } = {
    Home: "/",
    About: "/about",
    GitHub: "https://github.com/khairalanam/GPRG",
    Socials: "/socials",
  };
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <nav className="md:flex bg-dark-blue px-6 md:px-10 text-white py-4 lg:px-20 lg:py-5 justify-between items-center">
      <div className="flex justify-between items-center">
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
      <span className="md:hidden flex items-center justify-center">
          <Hamburger 
            toggled={navbar}
            toggle={() => setNavbar(!navbar)}
            duration={0.5}/>
      </span>
      </div>
      <ul className= {`pl-[2px] md:flex justify-between gap-3 md:gap-4 lg:gap-6 text-[1rem] ${navbar? "block":"hidden"}`}>
        {Object.entries(navElements).map(([key, value]) => (
          <li key={key} className="md:py-0 py-1">
            <Link href={value} className="hover:text-slate-500 transition animate-trans-navbar-component">
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
