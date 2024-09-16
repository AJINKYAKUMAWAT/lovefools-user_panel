import Header from "@/components/layout/index";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional, custom CSS variable
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>LoveFools</title>
        <link
          rel='icon'
          type='image/x-icon'
          href='/icon.png'
        />
        <meta
          property='og:image'
          content='/icon.png'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://lovefools.com/'
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
