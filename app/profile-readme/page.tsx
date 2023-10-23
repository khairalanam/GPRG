import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPRG | Generate Profile",
  description: "Generate your own GitHub profile readme by clicking this link",
  icons: {
    icon: "/Main-Logo.svg",
  },
};

export default function GenerateProfileReadme() {
  return <div className="text-[40px] text-white text-center p-4 mt-10">This is my Final Page</div>;
}
