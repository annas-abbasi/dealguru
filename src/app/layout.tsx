import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// import { Nunito_Sans } from "next/font/google";

// const nunitoSans = Nunito_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700", "900"], // Add the weights you need
});

import Footer from "@/components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
