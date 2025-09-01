import type { Metadata } from "next"; 
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import "./globals.css"; 
import { Modern_Antiqua } from "next/font/google";  
import Navbar from "@/components/shared/Navbar";

const poppins = Modern_Antiqua({ weight: ['400'], subsets: ['latin'] });



export const metadata: Metadata = {
  title: "Tweet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  ${poppins.className} `}
      >
        <AntdRegistry> 
          <Navbar />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
