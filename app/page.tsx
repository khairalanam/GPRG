import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GPRG",
  icons: {
    icon: "/Main-Logo.svg",
  },
};

export default function Home(): JSX.Element {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-white py-16 gap-6 px-6 md:px-12">
        <h1 className="text-[2rem] line-clamp-3 max-w-[20rem] text-center md:max-w-[40rem] leading-tight md:text-[2.5rem]">
          Make Awesome GitHub Profile Readmes with GPRG
        </h1>
        <h4 className="text-[1rem] text-center font-extralight">
          Use GPRG to make your own custom profile readmes
        </h4>
        <Link
          href="/generate-profile"
          className="border py-4 px-6 rounded-full transition hover:text-main-blue hover:bg-white mt-8 md:text-[1.25rem] md:px-8"
        >
          Generate Readme!
        </Link>
      </section>
    </>
  );
}
