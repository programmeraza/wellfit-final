import "./globals.css";

import Nav from "./components/Nav/Nav";
import Providers from "./components/Providers";

import { ViewTransitions } from "next-view-transitions";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  title: "WellFit | Premium Fitness Club Tashkent",
  description: "WellFit — Tashkent Forum Business Center, 5th Floor. Book a free training session today. +998 97 701 11 11",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="ru" className={geist.variable}>
        <body>
          <Providers>
            <Nav />
            {children}
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
