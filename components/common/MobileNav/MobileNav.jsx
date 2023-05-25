import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Hamburger as HamburgerIcon } from "@/components/icons";
import { Logo } from "@/components/common";
import { navItemsList } from "@/components/utils/getNavItems";

const MobileNav = () => (
  <div className="relative flex md:hidden">
    <Menu customBurgerIcon={<HamburgerIcon />} className="left-0 top-0">
      <Logo fillColor="var(--color-on-lt)" classNames="text-on-lt" />
      <Links />
    </Menu>
  </div>
);

export const Links = () => {

  return (
    <div className="py-6">
      {navItemsList.map((item) => (
        <Link href={`${item.slug}`} key={item.id}>
          <a className="p-4">{item.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
