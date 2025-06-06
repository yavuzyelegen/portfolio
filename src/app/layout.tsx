import { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const Ovo = OvoFont({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Selam! 👋",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
