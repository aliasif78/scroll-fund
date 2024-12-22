// Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";
import ReCaptchaWrapper from "./components/ReCaptchaProvider";

// Dependancies
import { ToastContainer } from "react-toastify";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Scroll Fund",
  description: "Earn money by scrolling & donate it to authorized charities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <ReCaptchaWrapper>
            <NavBar />
            <ToastContainer />

            {children}

            <Footer />
          </ReCaptchaWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}
