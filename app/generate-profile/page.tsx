import MainForm from "@/components/MainForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPRG | Generate Profile",
  description: "Generate your own GitHub profile readme by clicking this link",
  icons: {
    icon: "/Main-Logo.svg",
  },
};

export default function GenerateProfileReadme() {
  return <MainForm />;
}
