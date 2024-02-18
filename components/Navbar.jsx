"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setToggleMenu(false);
  }, [pathname]);

  return (
    <nav className="app__navbar">
      <div className="container">
        <div className="app__navbar-inner">
          <div className="app__navbar-logo">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={140}
                height={52}
                alt="logo"
                unoptimized
                priority
              />
            </Link>
          </div>
          <ul className="app__navbar-links">
            {navLinks.map((link, idx) => (
              <li className="app__navbar-link" key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/" className="app__btn app__btn-outline">
                Book a Free Consultation
              </Link>
            </li>
          </ul>
          <div className="app__navbar-smallscreen">
            <Menu
              onClick={() => setToggleMenu(true)}
              className="app__navbar-menuicon"
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <X
                  onClick={() => setToggleMenu(false)}
                  className="ovarlay__close"
                />
                <ul className="app__navbar-smallscreen-links">
                  {navLinks.map((link, idx) => (
                    <li className="app__navbar-link" key={link.href}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/" className="app__btn app__btn-outline">
                      Book a Free Consultation
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
