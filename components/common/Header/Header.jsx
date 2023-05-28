import { ThemeChanger} from "@/components/ui";
import Link from "next/link";
import { Logo, Navbar, MobileNav } from "@/components/common";

export default function Header({}) {
  return (
    <header className="w-full text-base py-8 shadow-sm">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Logo 
            fillColor="var(--color-primary)"
            classNames="text-primary"
          />
        </Link>

        <div className="flex items-center justify-end space-x-8">
          <Navbar />
          <MobileNav />
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
}
