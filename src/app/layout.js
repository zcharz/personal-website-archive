import './globals.css'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/socials'


export const metadata = {
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}