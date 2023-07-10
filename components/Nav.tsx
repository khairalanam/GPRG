import Image from "next/image";
import React from "react";
import logo from "@public/Main-Logo.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <section>
        <Image alt="GPRG Logo" src={logo} width={100} height={100} />
        <h1>GPRG</h1>
      </section>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/github">GitHub</Link>
        </li>
        <li>
          <Link href="/socials">Socials</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
