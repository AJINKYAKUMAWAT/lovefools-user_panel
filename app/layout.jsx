import Header from "@/components/layout/index";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
