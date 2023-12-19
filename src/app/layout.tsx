import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";

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
      <body className={""}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
