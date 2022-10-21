import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <section className='bg-beige dark:bg-dark'>
      <div className='p-3'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </section>
  );
}