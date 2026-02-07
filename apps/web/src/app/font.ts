import localFont from "next/font/local";

export const monaSans = localFont({
  src: [
    { path: "../public/fonts/mona-sans/MonaSans-Regular.woff2", weight: "400" },
    { path: "../public/fonts/mona-sans/MonaSans-Medium.woff2", weight: "500" },
    { path: "../public/fonts/mona-sans/MonaSans-SemiBold.woff2", weight: "600" },
    { path: "../public/fonts/mona-sans/MonaSans-Bold.woff2", weight: "700" },
    { path: "../public/fonts/mona-sans/MonaSans-ExtraBold.woff2", weight: "800" },
  ],
  variable: "--font-mona",
  display: "swap",
});
