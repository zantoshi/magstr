import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BTC++ Hackathon',
  description: 'Nostr other stuff',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
