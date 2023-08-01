import Nav from "@/components/Nav";
import "./globals.css";
import { Kanit } from "next/font/google";
import Footer from "@/components/Footer";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});

export const metadata = {
  description: "Generate awesome github profile readmes using GPRG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} bg-main-blue relative min-h-[100dvh]`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
