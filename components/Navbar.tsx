import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 grid grid-cols-5 gap-4">
      <ul className="hidden h-full gap-12 lg:flex bg-green-400">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href + link.key}
            key={link.key}
            className="regular-16 text-gray-50 fleCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
