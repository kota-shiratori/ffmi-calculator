import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FFMI-CALCULATOR',
  description: 'Generated by swan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-white h-screen flex justify-center flex-col overflow-hidden">{children}</body>
    </html>
  )
}
