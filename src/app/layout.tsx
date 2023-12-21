import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";

import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Countries",
  description: "Get information about all the countries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${nunito.variable} font-sans`}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <Navbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
