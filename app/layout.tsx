import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Montserrat} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"]
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
      <body className={montserrat.className}>
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
