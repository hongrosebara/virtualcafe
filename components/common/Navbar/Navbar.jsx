import Link from "next/link";

import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={s["main-nav"]}>
      <ul className="flex justify-end items-center space-x-6 text-primary">
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
          <Link href="/virtual-cafe-with-ambience-sounds">Virtual Cafe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
