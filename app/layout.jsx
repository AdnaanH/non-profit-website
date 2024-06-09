import { inter } from '@/components/fonts';
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";


export const metadata = {
  title: "Non-Proft Website",
  description: "Template design for non profit websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <TopHeader />
          <Navbar />
        </header>
        <main>
          {children}  
        </main>
      </body>
    </html>
  );
}
