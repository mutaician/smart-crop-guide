import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Crop Guide",
  description: "AI-driven crop guidance for Kenyan farmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content="Smart Crop Guide is an AI-powered platform for Kenyan farmers, offering real-time crop advice, weather insights, and personalized tips to boost yields and save resources—even offline." />
      </head>
      <html lang="en">
        <body className={`${roboto.variable} ${lora.variable} font-sans antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
