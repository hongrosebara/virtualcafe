import { Logo, SocialNav } from "@/components/common";
import s from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper bg-primary-dk">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <Logo fillColor="var(--color-on-lt)" classNames="text-on-lt" />
        <nav className={s["footer-nav"]}>
          <ul className="py-16 flex flex-col lg:flex-row justify-center items-center space-x-6 space-y-4 lg:space-y-0 text-on-lt">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/coffee-roaster-directory">Coffee Festivals</Link>
            </li>
            <li>
              <Link href="/coffee-roaster-directory">Coffee Roasters</Link>
            </li>
            <li>
              <Link href="/coffee-roaster-directory">Coffee Subscriptions</Link>
            </li>
            <li>
              <Link href="/virtual-cafe-with-ambience-sounds">
                Virtual Cafe
              </Link>
            </li>
          </ul>
        </nav>
        <SocialNav fillColor="var(--color-on-lt)" />
      </div>
    </footer>
  );
}
