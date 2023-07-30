import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPRG | About",
  description: "Everything about GPRG",
  icons: {
    icon: "/Main-Logo.svg",
  },
};

export default function About(): React.JSX.Element {
  return (
    <section className="text-white px-6 py-10 md:px-10 md:py-12 lg:px-20">
      <h1 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl lg:mb-10">
        About GPRG
      </h1>
      <p className="text-base font-light md:font-normal lg:text-lg">
        GPRG is an app where you can generate your own profile readme easily.
        You can include GitHub stats, social handles, and other media to make
        your very own GitHub readme.
      </p>
    </section>
  );
}
