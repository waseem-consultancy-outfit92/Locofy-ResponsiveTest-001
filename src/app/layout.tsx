import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
<<<<<<< HEAD
  title: "CQC Process Lifecycle",
  description: "This visual guide breaks down the CQC process, outlining who must register, how the registration works, and the key compliance steps involved for care providers.",
=======
  title: "Financial Conduct Authority",
  description:
    "Understand the primary goals of the Financial Conduct Authority, illustrated through a clear and concise diagram.",
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "apple-touch-icon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
<<<<<<< HEAD
    title: "CQC Process Lifecycle",
    description: "This visual guide breaks down the CQC process, outlining who must register, how the registration works, and the key compliance steps involved for care providers.",
=======
    title: "Financial Conduct Authority",
    description:
      "Understand the primary goals of the Financial Conduct Authority, illustrated through a clear and concise diagram.",
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
    url: "https://fcaroadmap.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://fcaroadmap.netlify.app/og.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "CQC Process Lifecycle",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}
