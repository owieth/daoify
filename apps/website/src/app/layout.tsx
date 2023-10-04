import "@ui/styles/globals.css";
import { Inter } from 'next/font/google';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DAOify · Future Companies',
  description: 'Latest Legal Wrapper for DAOs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
