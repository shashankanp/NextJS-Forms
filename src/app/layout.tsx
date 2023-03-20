import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Form",
  description: "Form for BHive :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roboto.className} mx-14`}>
      <head></head>
      <body>
        <header></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
