import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <ul className="hidden h-full gap-12"></ul>
    </nav>
  );
};

export default Navbar;
