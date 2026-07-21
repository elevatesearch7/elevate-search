import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Elevate Search | Be Found. Be Chosen.",
  description:
    "Modern search visibility company helping businesses improve visibility across Google Search, Google Maps, and AI-powered search experiences.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}