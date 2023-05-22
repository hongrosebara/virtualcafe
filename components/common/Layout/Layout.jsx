import { Header, Footer } from "@/components/common";

export default function Layout({ children }) {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
