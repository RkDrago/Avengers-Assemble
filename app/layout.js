import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Avengers Initiative: Heroes United",
  description: "Explore Earth's mightiest heroes and their legendary battle for justice.",
  "google-site-verification": "MFgZAXriGtgNcUi1H0Ba1m5GIi1BVpARHHExZi9uyYk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
