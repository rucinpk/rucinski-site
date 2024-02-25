"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current ) return;

    let tl = gsap.timeline({
      scrollTrigger: {
        start: "+=100 top",
        end: "+=100 +=50",
        scrub: true,
      },
      onStart: () => {
        if (!navRef || !navRef.current) {
          return;
        }
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-30",
          "backdrop-filter",
          "backdrop-blur-xl"
        );
      },
      onReverseComplete: () => {
        if (!navRef || !navRef.current) {
          return;
        }
        console.log("XD");
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-30",
          "backdrop-filter",
          "backdrop-blur-xl"
        );
      },
    });

    tl.to(navRef.current, {
      duration: 2,
    });
  }, [navRef]);

  return (
    <header className="fixed top-0 left-0 w-full p-8 px-[9%] flex justify-between items-center z-50">
      <nav
        ref={navRef}
        className="flex space-x-6 font-semibold text-3xl text-text ml-14 px-12 py-6 rounded-full duration-150"
      >
        <Link
          href="#"
          className="hover:text-primary transition-all duration-300"
        >
          Home
        </Link>
        <a
          href="#services"
          className="hover:text-primary transition-all duration-300"
        >
          Services
        </a>
        <Link
          href="#industries"
          className="hover:text-primary transition-all duration-300"
        >
          Industries
        </Link>
        <Link
          href="#references"
          className="hover:text-primary transition-all duration-300"
        >
          References
        </Link>
        <Link
          href="/contact"
          className="hover:text-primary transition-all duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
