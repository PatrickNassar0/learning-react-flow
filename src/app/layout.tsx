import "./globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Navbar />
        <div className="p-5 min-h-[80dvh] w-full">
          {children}
        </div>
      </>
  );
}
