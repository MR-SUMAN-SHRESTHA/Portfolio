import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from './../components/main/StarBackground';
import Footer from './../components/main/Footer';
const inter = Inter({ subsets: ['latin'] })
import Navbar from './../components/main/Navbar';
export const metadata: Metadata = {
  title: 'Suman Shrestha',
  description: 'Suman Shrestha ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
  <body>
    <Navbar/>
    {children}
    <Footer/>
  </body>
</html>
  )
}
