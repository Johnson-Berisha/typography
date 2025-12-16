import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "../context/ContentProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Typography Matters!",
  description: "Learn how to make your UI better with typography.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ContentProvider>{children}</ContentProvider>
      </body>
    </html>
  );
}
