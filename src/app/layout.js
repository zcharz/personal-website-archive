import './globals.css'
import { Inter, Raleway } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en" className={raleway.className}>
      <body>{children}</body>
    </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//      <html lang="en">
//        <body>{children}</body>
//      </html>
//    )
//  }