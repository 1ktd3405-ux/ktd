import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Village Organic | London's Organic Food Specialists",
  description:
    "London's favourite organic food stores. Fresh produce, wholesome groceries, health & beauty — all certified organic. Three stores across London & free delivery over £60.",
  keywords: "organic food London, organic grocery, wholefood, Village Organic, WholeFoodsBox",
  openGraph: {
    title: "Village Organic | London's Organic Food Specialists",
    description: "London's favourite organic food stores — Victoria Park, Clapham Common & Caledonian Road.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
