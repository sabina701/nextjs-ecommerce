"use client";
import React from "react";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

import AppProvider from "@/redux/provider";
import MainLayout from "./layouts/MainLayout";
import ToastProvider from "./components/ToastProvider";

// export const metadata = {
//   title: config.appName,
//   description: "Electronics e-commerce,online shopping",
// };

const RootLayout = ({ children }) => {
  return (
    <html className="font-serif">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-screen dark:bg-gray-900 dark:text-white ">
              {" "}
              {children}
            </main>
            <Footer />
          </MainLayout>
          <ToastProvider />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
