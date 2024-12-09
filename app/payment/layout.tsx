import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";


export const metadata: Metadata = {
  title: "Payment whalepay",
  description: "Платежный сервис на каждый день",
};

const RootLayout = ({ children,}: Readonly<{children: React.ReactNode;}>): JSX.Element => {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}


export default RootLayout;