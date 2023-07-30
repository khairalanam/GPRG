import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GPRG | Socials",
  description: "Social Handles on GPRG",
  icons: {
    icon: "/Main-Logo.svg",
  },
};

export default function Socials(): React.JSX.Element {
  const socials: { [key: string]: string } = {
    Twitter: "https://www.twitter.com/khair_alanam",
    LinkedIn: "https://www.linkedin.com/in/khair-alanam-b27b69221/",
    GitHub: "https://github.com/khairalanam",
    Devto: "https://dev.to/khair_al_anam",
    Behance: "https://www.behance.net/khairalanam",
  };

  return (
    <section className="text-white px-6 py-10 md:px-10 md:py-12 lg:px-20">
      <h1 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl lg:mb-10">
        My Socials
      </h1>
      <section className="flex flex-col gap-2 lg:gap-4">
        {Object.entries(socials).map(([social, link]) => (
          <Link
            key={social}
            href={link}
            className="text-base font-light md:font-normal md:text-xl lg:text-2xl hover:text-slate-500 transition"
          >
            {social}
          </Link>
        ))}
      </section>
    </section>
  );
}
