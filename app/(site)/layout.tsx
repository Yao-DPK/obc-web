import Footer from "../../src/components/layout/Footer";
import Header from "../../src/components/layout/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}