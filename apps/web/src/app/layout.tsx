import type { Metadata } from "next";
 
import "@/src/app/globals.css";
import { Inter, Poppins } from "next/font/google";
import GSAPProvider from "../components/web/GSAPProvider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "LHDC",
    template: "%s | LHDC",
  },
  description: "A modern web platform for users and admins.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "LHDC",
    description: "A modern web platform.",
    url: "https://LHDC.com",
    siteName: "LHDC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
         <GSAPProvider>
            <div id="smooth-wrapper">
            <div id="smooth-content">
               {children}
                 </div>
          </div>
         </GSAPProvider>

      </body>
    </html>
  );
}
