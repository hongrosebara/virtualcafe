import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <section className='section-layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}