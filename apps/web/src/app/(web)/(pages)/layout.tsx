import Footer from "@/src/components/web/layout/Footer";
import Header from "@/src/components/web/layout/Header";
import { Inter, Poppins } from "next/font/google";
// import { monaSans } from "./fonts";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});


export default async function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <div className={`main-screen min-h-screen bg-[#ECF0F0] ${inter.variable} ${poppins.variable} antialiased`}>
      
      <Header 
       
      />

      {/* PAGE CONTENT — padded */}
      <main className="w-full">
        {children}
      </main>

      {/* FOOTER — full width */}
      <Footer />
    </div>
  );
}

export const dynamic = "force-dynamic";

 
