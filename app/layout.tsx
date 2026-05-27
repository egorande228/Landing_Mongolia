import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { mongoliaContent } from "@/content/markets/mongolia";
import { mongoliaThemeCssVariables } from "@/themes/mongolia";
import "./globals.css";

export const metadata: Metadata = {
  title: mongoliaContent.en.seo.homeTitle,
  description: mongoliaContent.en.seo.homeDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={mongoliaThemeCssVariables as CSSProperties}>
        {children}
      </body>
    </html>
  );
}
