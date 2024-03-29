import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaime Zepeda Pina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-dvh`}
        style={{
          color: "white",
          fontFamily: "courier, monospace",
          backgroundColor: "rgb(10, 30, 0)",
        }}
      >
        <CursorFollower className="z-[-10]" />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
