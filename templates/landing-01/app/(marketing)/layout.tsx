import { Footer } from "@/components/navigation/footer";
import { Navbar } from "@/components/navigation/navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mt-20 mx-auto w-full z-0 relative">{children}</main>
      <Footer />
    </>
  );
}
