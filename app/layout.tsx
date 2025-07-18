import type { Metadata } from "next";
import { Source_Sans_3 as FontSans} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Saransh - AI-Powered PDF Summarization",
  description: "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advance AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body
        className={` ${fontSans.variable} font-sans antialiased`}
      >
      
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
<Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
