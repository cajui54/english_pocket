import type { Metadata } from "next";
import { Roboto, Poppins, Spicy_Rice } from "next/font/google";
import "./globals.scss";
import { MenuContextProvider } from "./context/contextMenu";
import { VerbsContextProvider } from "./context/contextVerbs";

export const metadata: Metadata = {
  title: "English Pocket | list verbs irregular",
  description: "Found irregular verbs here list a lot verb irregular",
  keywords: "english, verbs irregular, words",
  icons: {
    icon: ["/logoStatue.png"],
    apple: ["/logoStatue.png"],
    shortcut: ["/logoStatue.png"],
  },
};
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});
const spicy_rice = Spicy_Rice({
  subsets: ["latin"],
  weight: ["400"],

  variable: "--font-spicy_rice",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${spicy_rice.variable}`}
      >
        <MenuContextProvider>
          <VerbsContextProvider>{children}</VerbsContextProvider>
        </MenuContextProvider>
      </body>
    </html>
  );
}
