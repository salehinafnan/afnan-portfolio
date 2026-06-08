import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mushfiqus Salehin Afnan | Portfolio",
  description: "Aspiring web developer with a passion for creating engaging and user-friendly experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-blue-300 selection:text-blue-900`}>
        {/* Modern Background */}
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(25,25,112,0.5),rgba(0,0,0,1))]"></div>
        </div>
        <main className="container mx-auto px-6 md:px-10 lg:px-16 selection:bg-blue-300 selection:text-blue-900">
          {children}
        </main>
      </body>
    </html>
  );
}
