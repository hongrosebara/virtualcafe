import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Hamburger as HamburgerIcon } from "@/components/icons";
import { Logo } from "@/components/common";

const MobileNav = () => (
  <div className="relative flex md:hidden">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      className="left-0 top-0"
    >
      <Logo /> 
      <Links />
    </Menu>
  </div>
);

export const Links = () => (
  <>
    <Link href="/">
      <a className="font-bold p-4">Home</a>
    </Link>
    <Link href="/about">
      <a className="font-bold p-4">About</a>
    </Link>
  </>
);

export default MobileNav;
