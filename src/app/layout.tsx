import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Kumar",
  description: `Highly skilled Full Stack Developer with 5+ years of expertise in crafting dynamic and user-centric web applications. Proficient in
frontend development using ReactJS, Angular, and Vue.js, as well as backend systems with Node.js, Express.js, and related
technologies. Also well-versed in backend development using Java and Python. Adept at comprehending project requirements and
devising optimal solutions that align with business objectives.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
