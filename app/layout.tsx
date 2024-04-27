import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Montserrat} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const mont = localFont({
  src: [{
    path: "../assets/fonts/montserrat.ttf",
  }],
  variable: "--font-mont"
})

export const metadata: Metadata = {
  title: "Falcon Emirates",
  description: "A lot of opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.variable}`}>
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
