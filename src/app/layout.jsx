import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome | Function404',
  description: 'Discover my Work and Projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
