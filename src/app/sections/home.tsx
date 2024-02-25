"use client";
import gsap from "gsap";
import Link from "next/link";
import ParticlesComponent from "../components/Particles";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import useTypewriter from "../hooks/useTypewriter";
import { useEffect } from "react";

const HomeSection = () => {
  const words = ["Python", "React", "AI", "Django"];
  const { cursor, typewriter } = useTypewriter(words);

  useEffect(() => {
    const root = document.documentElement;

    document.addEventListener("mousemove", (evt) => {
      let x = evt.clientX;
      let y = evt.clientY;

      root.style.setProperty("--cursor-x", x + "px");
      root.style.setProperty("--cursor-y", y + "px");
    });
  }, []);

  useGSAP(() => {
    const downArrow = document.getElementById("arrow-down");
    const services = document.getElementById("services");

    if (!downArrow || !services) return;

    downArrow.addEventListener("click", () => {
      services.scrollIntoView({ behavior: "smooth" });
    });
  });

  useGSAP(() => {
    const bgImgWrapper = document.getElementById("home-img");
    const bgImages = document.querySelectorAll("div[id*=bg-img-]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgImgWrapper,
        start: "top top",
        scrub: true,
      },
    });

    bgImages.forEach((bg, index) => {
      const bgSpeed = bg.getAttribute("data-speed") as number | null;
      if (!bgSpeed) return;

      tl.to(
        bg,
        {
          duration: 5,
          y: 60 * bgSpeed,
        },
        0
      );
    });
  });

  return (
    <section className="flex p-0 px-[9%] relative md:items-center md:flex-row md:justify-normal flex-col justify-around">
      <div className="absolute pointer-events-none w-full h-dvh" id="home-img">
        <div id="bg-img-1" className="" data-speed="0.2"></div>
        <div id="bg-img-2" data-speed="2">
          <div className="home-particles w-full md:w-1/2">
            <ParticlesComponent />
          </div>
        </div>
      </div>

      <div className="max-w-5xl home-content leading-snug z-20 md:mt-0 mt-24">
        <h1 className="font-extrabold lg:text-7xl md:text-6xl sm:text-5xl">
          <span className="text-nowrap whitespace-nowrap">
            Coding the future with {" "}
            <span id="typewriter" className="text-primary" ref={typewriter} />
          </span>
          <span id="cursor" className="text-primary" ref={cursor}>
            |
          </span>
          <br />
    
        </h1>
        <h2 className="text-4xl">Patryk Ruciński</h2>
        <div className="relative text-animate">
          <h3 className="text-transparent bg-clip-text bg-no-repeat">
            Fullstack Developer
          </h3>
        </div>

        <p className="text-2xl mt-8 mx-0 mb-16">
          I am software engineer experienced in FinTech and CyberSecurity
          Domains. I am technology geek, loving blockchain AR and AI. . <br />{" "}
          <br /> I love learning and trying new things. In my free time I dive
          🤿, learn natural (日本語, Русский) and programming languages, read
          business and science books, play piano 🎹, guitar 🎸 and computer
          games 🎮.
        </p>

        <div className="relative flex justify-between btn-box md:flex-row flex-col gap-4 items-center md:w-wide">
          <Link
            href="#"
            className="relative inline-flex justify-center items-center btn bg-primary rounded-xl text-secondary h-20"
          >
            Let&apos;s talk
          </Link>
          <a
              target="_blank"
              href="https://www.instagram.com/patryk.rucinski/"
            className="relative inline-flex justify-center items-center btn bg-primary rounded-xl text-secondary h-20"
          >
            See my work
          </a>
        </div>
        <div className="md:mb-64 mb-8"></div>
      </div>


      <div className="absolute top-0 right-0 w-1/2 h-full bg-transparent duration-1000 hover:opacity-80 hover:bg-secondary hidden md:block"></div>

      <div className="md:self-end mb-8 flex flex-col items-center gap-8 z-50">
        <p className="text-2xl font-semibold">See my skills</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          id="arrow-down"
        >
          <path
            fill="#fff"
            d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"
          ></path>
        </svg>
      </div>
      <div className="home-sci md:absolute bottom-16 w-full md:w-[300px] flex justify-between z-20">
        <a
          className="relative inline-flex items-center justify-center w-16 h-16 bg-transparent rounded-full overflow-hidden text-primary z-10 text-4xl duration-500  hover:text-secondary border-2 border-primary"
          target="_blank"
          href="https://www.instagram.com/patryk.rucinski/"
        >
          <FaTwitter />
        </a>
        <a
          className="relative inline-flex items-center justify-center w-16 h-16 bg-transparent rounded-full overflow-hidden text-primary z-10 text-4xl duration-500  hover:text-secondary border-2 border-primary"
          target="_blank"
          href="https://www.instagram.com/patryk.rucinski/"
        >
          <FaYoutube />
        </a>
        <a
          className="relative inline-flex items-center justify-center w-16 h-16 bg-transparent rounded-full overflow-hidden text-primary z-10 text-4xl duration-500  hover:text-secondary border-2 border-primary"
          target="_blank"
          href="https://www.instagram.com/patryk.rucinski/"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
