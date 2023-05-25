import Link from "next/link";
import s from "./Navbar.module.scss";
import { navItemsList } from "@/components/utils/getNavItems";

const Navbar = () => {
  return (
    <nav className={s["main-nav"]}>
      <ul className="flex justify-end items-center space-x-6 text-primary">
        {navItemsList.map((item) => (
          <li key={item.id}>
            <Link href={`${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
