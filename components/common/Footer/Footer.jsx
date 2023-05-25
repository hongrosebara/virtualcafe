import Link from "next/link";
import { Logo, SocialNav } from "@/components/common";
import s from "./Footer.module.scss";
import { navItemsList } from "@/components/utils/getNavItems";

export default function Footer() {

  return (
    <footer className="footer-wrapper bg-primary-dk">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <Logo fillColor="var(--color-on-lt)" classNames="text-on-lt" />
        <nav className={s["footer-nav"]}>
          <ul className="py-16 flex flex-col lg:flex-row justify-center items-center text-center space-x-6 space-y-4 lg:space-y-0 text-on-lt">
            {navItemsList.map((item) => (
              <li key={item.id}>
                <Link href={`${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialNav fillColor="var(--color-on-lt)" />
      </div>
    </footer>
  );
}
