import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fork & Knife",
  description:
    "Discover a variety of delicious recipes, from quick snacks to gourmet meals, to satisfy every craving. Explore, cook, and enjoy a world of flavors!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/icons8-fork-and-knife-66.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
