"use client";
import AuthContext from "@/authcontext/AuthContext";
import Header from "@/components/layout/index";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import ogImage from '../assets/images/og-tag.jpg';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional, custom CSS variable
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Scroll to top when component mounts (refresh)
    window.scrollTo(0, 0);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>LoveFools</title>
        <link rel="icon" type="image/x-icon" href="/icon.png" />
        <meta name="title" content="LoveFools" />
        <meta
          name="description"
          content="Menu - Check out the Menu of The LoveFools"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LoveFools" />
        <meta
          property="og:description"
          content="Menu - Check out the Menu of The LoveFools"
        />
        <meta property="og:url" content="https://lovefools-user-panel.vercel.app/" />
        <meta
          property="og:image"
          content={`https://lovefools-user-panel.vercel.app/${ogImage}`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://lovefools-user-panel.vercel.app/${ogImage}`}
        />
        <meta property="og:image:alt" content="LoveFools" />
        <meta property="og:image:type" content="image/svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LoveFools" />
        <meta
          name="twitter:description"
          content="Menu - Check out the Menu of The LoveFools"
        />
        <meta
          name="twitter:image"
          content={`https://lovefools-user-panel.vercel.app/${ogImage}`}
        />
        <meta
          name="twitter:image:secure_url"
          content={`https://lovefools-user-panel.vercel.app/${ogImage}`}
        />
      </head>
      <body className={inter.className}>
        <AuthContext>
          <Header />
        </AuthContext>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
