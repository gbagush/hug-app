"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Panduan", link: "/panduan" },
  { title: "Check Up", link: "/checkup" },
  { title: "Meditasi", link: "/meditasi" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full h-20 ${scrolled ? "shadow-md bg-white" : ""}`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 lg:px-24">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex gap-10">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li className="text-sm text-gray-600 hover:text-cyan-500">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer pl-24 transition-transform duration-300 transform"
        >
          {menuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 w-[65%] h-screen p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center">
          <div className="flex-col py-4">
            <ul>
              {menuItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
