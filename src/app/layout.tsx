import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/../auth";
import SessionProvider from "@/components/SessionProvider";
import { Providers } from "./providers.jsx";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zach Vivian's Personal Website",
  description: "Find more information about me and leave testimonials!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Providers>
            <Header />
            <Sidebar />
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
