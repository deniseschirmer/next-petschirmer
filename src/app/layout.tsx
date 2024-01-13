import "@/globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "500", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pet Schirmer",
  description:
    "Pet Schirmer, somos especialistas em banho e tosa, cuidamos do seu animalzinho como se fosse nosso🐶",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon-pet.ico" />
      </head>
      {/**Padrão para todas as páginas (Header e footer são os mesmos para todas) */}
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
