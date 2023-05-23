import { Header, Footer } from "@/components/common";

export default function Layout({ children }) {
  return (
    <section className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
