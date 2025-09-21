import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/providers";
import { Navbar } from "../components/navigation/navbar";
import { Footer } from "../components/navigation/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickStart UI - Templates",
  description:
    "Templates de alta qualidade e totalmente personalizáveis. Feito por VncsRaniery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          <main className="mt-20 mx-auto w-full z-0 relative">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
