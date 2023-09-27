import "@/globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Pet Schirmer",
  description: "Pet Schirmer Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <Navbar /> {children}
      </body>
    </html>
  );
}
