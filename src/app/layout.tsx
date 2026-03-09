import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactButton from "@/components/layout/contactbutton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jadegreen.lk"),
  title: {
    default: "Jade Green Hotel Hambantota | Hotel, Wedding Hall & Restaurant",
    template: "%s | Jade Green Hotel Hambantota",
  },
  description:
    "Jade Green Hotel Hambantota offers comfortable rooms, a restaurant, wedding hall, event venue, and boutique hospitality in Hambantota, Sri Lanka.",
  keywords: [
    "Jade Green Hotel",
    "Jade Green Hotel Hambantota",
    "Hotel in Hambantota",
    "Hotels in Hambantota",
    "Luxury hotel Hambantota",
    "Best hotel in Hambantota",
    "Boutique hotel Hambantota",
    "Rooms in Hambantota",
    "Accommodation in Hambantota",
    "Wedding hall Hambantota",
    "Event venue Hambantota",
    "Banquet hall Hambantota",
    "Function hall Hambantota",
    "Restaurant in Hambantota",
    "Hotel with pool Hambantota",
    "Family hotel Hambantota",
    "Business hotel Hambantota",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.jadegreen.lk",
  },
  openGraph: {
    title: "Jade Green Hotel Hambantota",
    description:
      "Hotel, wedding hall, restaurant, and event venue in Hambantota, Sri Lanka.",
    url: "https://www.jadegreen.lk",
    siteName: "Jade Green Hotel Hambantota",
    images: [
      {
        url: "/assets/home/001.jpg",
        width: 1200,
        height: 630,
        alt: "Jade Green Hotel Hambantota",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <Navbar />
        {children}
        <div className="fixed bottom-4 right-4 z-50">
          <ContactButton floating />
        </div>
        <Footer />
      </body>
    </html>
  );
}