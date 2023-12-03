import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "JumboHack",
  description: "Probably the coolest hackathon around tbh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
