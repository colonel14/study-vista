import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--main-font",
});

const dinamit = localFont({
  src: [
    {
      path: "./fonts/dinamit/dinamit-extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/dinamit/dinamit-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/dinamit/dinamit-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/dinamit/dinamit-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/dinamit/dinamit-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/dinamit/dinamit-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--dinamit-font",
});

export const metadata = {
  title: "The Study Vista",
  description: "The Study Vista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dinamit.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
