import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import SessionWrapper from "@/components/auth/SessionWrapper";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Application de test",
  description: "Il s'agit d'une application de test pour l'apprentissage de NextAuth avec Prisma et NextJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="fr">
        <body className={montserrat.className}>
          <Nav/>
          {children}
          </body>
      </html>
    </SessionWrapper>
  );
}
