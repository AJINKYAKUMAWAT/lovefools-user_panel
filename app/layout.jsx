'use client'
import AuthContext from "@/authcontext/AuthContext";
import Header from "@/components/layout/index";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";

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
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lovefools.com/" />
      </head>
      <body className={inter.className}>
        <AuthContext>
          <Header />
        </AuthContext>
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
