import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ToasterProvider from "@/lib/providers/ToasterProvider";
// import { AuthContext } from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMLJ Store",
  description: "SMLJ Store",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { name: "John doe" };
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}

          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
