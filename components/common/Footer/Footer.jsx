import Link from "next/link";
import { Logo, SocialNav } from "@/components/common";
import s from "./Footer.module.scss";
import { navItemsList } from "@/components/utils/getNavItems";

export default function Footer() {

  return (
    <footer className="footer-wrapper bg-surface shadow-md font-light">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <Logo fillColor="var(--color-on-primary-dk)" classNames="text-on-primary-dk" />
        <nav className={s["footer-nav"]}>
          <ul className="py-16 flex flex-col lg:flex-row justify-center items-center text-center space-y-4 lg:space-x-6 lg:space-y-0">
            {navItemsList.map((item) => (
              <li key={item.id} className="font-serif text-on-primary-dk hover:text-accent-lt">
                <Link href={`${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialNav 
          fillColor="var(--color-on-primary-dk)" />
      </div>
    </footer>
  );
}
