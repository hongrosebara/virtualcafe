import { Logo, Navbar } from "@/components/common"

export default function Footer() {
  return (
    <footer className="footer-wrapper bg-primary-dark">
      <div className="p flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </footer>
  );
}
