import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Providers from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DJ Song Request",
  description: "Request songs for your DJ to play at your event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <SpeedInsights/>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
