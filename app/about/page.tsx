import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPRG | About",
  description: "Everything about GPRG",
};

export default function About() {
  return (
    <section className="text-white px-20 py-16">
      <h1 className="text-4xl font-semibold mb-8">About GPRG</h1>
      <p>
        GPRG is an app where you can generate your own profile readme easily.
        You can include GitHub stats, social handles, and other media to make
        your very own GitHub readme.
      </p>
    </section>
  );
}
