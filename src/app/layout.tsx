import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.scss";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Snake Game",
  description: "Minimalist snake game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        {children}
      </body>
    </html>
  );
}
