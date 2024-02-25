"use client";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

import hacker from "../../../public/hacker.png";
import flashlightLight from "../../../public/flashlight-light.png";
import darkHacker from "../../../public/dark-hacker.png";
import cyberExpert from "../../../public/cyber-expert.png";
import eyesOpen from "../../../public/eyes-open.png";
import eyesSemiclosed from "../../../public/eyes-semiclosed.png";
import eyesSemiopenDown from "../../../public/eyes-semiopen-down.png";
import eyesOpenDown from "../../../public/eyes-open-down.png";
import { useGSAP } from "@gsap/react";

const ThreatSection = () => {
  useGSAP(() => {
    const contactWrapper = document.getElementById("contact");
    const cyberExpertImage = document.getElementById("cyber-expert");
    const contactUsButton = document.getElementById(
      "contact__contact_us_button"
    );
    const flashlightImage = document.getElementById("flashlight-light");
    const hacker = document.getElementById("hacker");

    const eyesSemiClosed = document.getElementById("eyes-semiclosed");
    const eyesOpen = document.getElementById("eyes-open");
    const eyesSemiOpenDown = document.getElementById("eyes-semiopen-down");
    const eyesOpenDown = document.getElementById("eyes-open-down");

    gsap.set(cyberExpertImage, { yPercent: 100 });
    gsap.set(contactUsButton, { xPercent: -200, opacity: 0, scale: 0.5 });
    gsap.set(flashlightImage, { opacity: 0 });
    gsap.set(hacker, { opacity: 0 });
    gsap.set(eyesSemiClosed, { opacity: 0 });
    gsap.set(eyesOpen, { opacity: 0 });
    gsap.set(eyesSemiOpenDown, { opacity: 0, zIndex: 10 });
    gsap.set(eyesOpenDown, { opacity: 0, zIndex: 10 });

    const flashingTl = gsap.timeline({
      paused: true,
    });

    const blinkingEyesTl = gsap.timeline({
      repeat: -1,
    });

    blinkingEyesTl
      .to(eyesSemiOpenDown, { opacity: 1, duration: 0.5 })
      .to(eyesOpenDown, { opacity: 1, duration: 4 })
      .to(eyesOpenDown, { opacity: 0, duration: 0.5 })
      .to(eyesSemiOpenDown, { opacity: 0, duration: 0.5 });

    // some faster blinking now

    for (let i = 0; i < 2; i++) {
      blinkingEyesTl
        .to(eyesSemiOpenDown, { opacity: 1, duration: 0.4 })
        .to(eyesOpenDown, { opacity: 1, duration: 0.4 })
        .to(eyesOpenDown, { opacity: 0, duration: 0.4 })
        .to(eyesSemiOpenDown, { opacity: 0, duration: 0.4 });
    }

    const upperBlinkingEyesTl = gsap.timeline({
      repeat: -1,
      paused: true,
    });

    upperBlinkingEyesTl
      .to(eyesSemiClosed, { opacity: 1, duration: 0.5 })
      .to(eyesOpen, { opacity: 1, duration: 4 })
      .to(eyesOpen, { opacity: 0, duration: 0.5 })
      .to(eyesSemiClosed, { opacity: 0, duration: 0.5 });

    // some faster blinking now

    for (let i = 0; i < 2; i++) {
      upperBlinkingEyesTl
        .to(eyesSemiClosed, { opacity: 1, duration: 0.4 })
        .to(eyesOpen, { opacity: 1, duration: 0.4 })
        .to(eyesOpen, { opacity: 0, duration: 0.4 })
        .to(eyesSemiClosed, { opacity: 0, duration: 0.4 });
    }

    flashingTl
      .to(flashlightImage, { opacity: 1, ease: "none", duration: 0.5 })
      .to(flashlightImage, { opacity: 0, ease: "none", duration: 0.5 });

    for (let i = 0; i < 4; i++) {
      flashingTl
        .to(flashlightImage, { opacity: 1, ease: "none", duration: 0.1 })
        .to(flashlightImage, { opacity: 0, ease: "none", duration: 0.1 });
    }

    for (let i = 0; i < 8; i++) {
      flashingTl
        .to(flashlightImage, { opacity: 1, ease: "none", duration: 0.05 })
        .to(flashlightImage, { opacity: 0, ease: "none", duration: 0.05 });
    }

    flashingTl.to(flashlightImage, { opacity: 1, duration: 0.5 });
    flashingTl.to(hacker, { opacity: 1, duration: 1 }, "-=0.5");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactWrapper,
        start: "top center",
        end: "center-=200 center",
        scrub: true,
      },
      onComplete: () => {
        flashingTl.play();
        upperBlinkingEyesTl.play();
        gsap.set(eyesSemiOpenDown, { zIndex: 10 });
        gsap.set(eyesOpenDown, { zIndex: 10 });
      },
      onUpdate: () => {
        flashingTl.restart();
        flashingTl.pause();
        upperBlinkingEyesTl.restart();
        upperBlinkingEyesTl.pause();
      },
      yoyo: true,
    });

    tl.to(
      contactUsButton,
      {
        xPercent: 0,
        opacity: 1,
        scale: 1.2,
      },
      0
    );

    tl.to(
      cyberExpertImage,
      {
        yPercent: 0,
      },
      0
    );
  });

  useGSAP(() => {
    const cursor = document.getElementById("flashlight-cursor");
    const trigger = document.getElementById("contact");
    const mask = document.querySelector(".mask") as HTMLElement;

    if (!cursor) return;

    const moveCursor = (e: any) => {
      if (!trigger) return;
      if (!mask) return;

      const rect = trigger.getBoundingClientRect();

      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      mask.style.setProperty("--mouse-x", x + "px");
      mask.style.setProperty("--mouse-y", y + "px");

      cursor.style.left = `${e.clientX - rect.left}px`;
      cursor.style.top = `${e.clientY - rect.top}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    if (!trigger) return;

    trigger.addEventListener("mouseenter", () => {
      console.log("mouse entered");
      cursor.style.display = "block";
    });

    trigger.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
      console.log("mouse left");
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", () => {
        cursor.style.display = "block";
      });
    };
  });

  return (
    <section className="relative z-20" id="contact">
      <div className="absolute h-1/2 w-full bg-gradient-to-b from-secondary to-black z-10" />
      <div className="absolute h-1/2 bottom-0 w-full bg-gradient-to-t from-secondary to-black z-40 border-t-2 border-w flex items-center justify-center">
        <p className="text-4xl max-w-7xl p-4">
          Despite my focus on secure coding, my development remains swift and
          adaptable, attracting repeat project requests from every client.
        </p>
      </div>
      <div className="z-10" id="flashlight-cursor"></div>
      <div className="mask z-30 absolute w-full h-1/2" />

      <div className="absolute w-full h-1/2 bottom-1/2 z-10 overflow-hidden">
        <Image
          src={darkHacker}
          alt="hackers"
          id="dark-hacker"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20 w-1/3 overflow-hidden"
        />
      </div>

      <div className="absolute h-1/2 bottom-0 w-full z-30 border-t-2 border-w" />

      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          id="cyber-expert"
          src={cyberExpert}
          alt="cyber expert"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          id="eyes-semiclosed"
          src={eyesSemiclosed}
          alt="semi closed eyes"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          id="eyes-open"
          src={eyesOpen}
          alt="opened eyes"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          id="flashlight-light"
          src={flashlightLight}
          alt="flashlight"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          src={hacker}
          alt="hackers"
          id="hacker"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          id="eyes-semiopen-down"
          src={eyesSemiopenDown}
          alt="semiopened eyes"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="h-1/2 md:w-1/2 w-3/4 absolute bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex items-end justify-between">
        <Image
          id="eyes-open-down"
          src={eyesOpenDown}
          alt="opened eyes"
          className="w-1/2 absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="h-1/2 w-3/4 absolute md:bottom-1/2 left-1/2 -translate-x-1/2 z-30 flex md:items-end items-center justify-between">
        <div className="md:h-1/2 flex items-start gap-8 flex-col">
          <p id="contact__contact_description" className="md:w-1/3 bg-black bg-opacity-50">
            At the heart of my development philosophy lies a profound passion
            for security and a commitment to delivering high-quality, secure
            code. My approach is grounded in the belief that every line of code
            should not only meet functional requirements but also adhere to the
            highest security standards. This dedication to security is woven
            through every project I undertake, ensuring that I deliver solutions
            that are not just effective but also resilient against evolving
            threats, demonstrating my love for crafting secure software
            environments.
          </p>
        </div>
      </div>

      <div className="z-20 gap-4 relative py-32 flex items-center justify-center flex-col w-full ">
        <div className="text-6xl font-extrabold max-w-7xl leading-snug dark-text">
          <h6 className="text-primary cursor-default p-4">
            Cybercriminals are always lurking, eagerly waiting to exploit any
            piece of insecure code.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;
