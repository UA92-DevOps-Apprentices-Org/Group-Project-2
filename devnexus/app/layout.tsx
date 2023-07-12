import Link from 'next/link'
import Navbar from '@/components/card/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
      </head>
      <body  className="overflow-x-hidden bg-slate-600">
        <Navbar />
        <main >
        {children}
        </main>
        <Footer /> 
      </body>
    </html>
  )
}

function Footer() {
  return <>
  <footer className='flex flex-wrap-reverse h-96 bg-zinc-950 place-content-center items-center gap-36'>
    <div>
      <h1>DEVNEXUS</h1>
    </div>
    <div className=''>
      <ul>
        <li><Link href="">About Us</Link></li>
        <li><Link href="">Github</Link></li>
        <li><Link href="">Socials</Link></li>
        <li><Link href="">Contact Us</Link></li>
        <li><Link href="">Careers</Link></li>
        <li><Link href="">User Data & Privacy Statement</Link></li>
      </ul>
    </div>
  </footer>
  </>
}