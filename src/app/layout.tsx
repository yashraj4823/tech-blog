import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import Footer from "@/components/general/Footer";
import SignInModal from "@/components/modals/SignInModal";
import SearchModal from "@/components/modals/SearchModal";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Tech Blog built with Next.js 13, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
          <SignInModal />
          <SearchModal />
          <Toaster/>
        </QueryProvider>
      </body>
    </html>
  );
}
