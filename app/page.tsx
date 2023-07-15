import Nav from "@/components/Nav";

export const metadata = {
  title: "GPRG",
};

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-white py-16 gap-6">
        <h1 className="text-[3rem] line-clamp-2 max-w-[50rem] text-center leading-tight">
          Make Awesome GitHub Profile Readmes with GPRG
        </h1>
        <h4 className="text-[1.25rem] font-extralight">
          Use GPRG to make your own custom profile readmes
        </h4>
      </section>
    </>
  );
}
