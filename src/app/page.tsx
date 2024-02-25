"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/all";

import HomeSection from "./sections/home";
import MouseFollower from "mouse-follower";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";
import ServicesSection from "./sections/services";
import SocialProof from "./sections/social-proof";
import ThreatSection from "./sections/threat";
import Contact from "./sections/contact";
import TimelineSection from "./sections/timeline";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);

export default function Home() {
  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const cursor = new MouseFollower({
      className: "mf-cursor text-primary",
      stateDetection: {
        "-pointer": "a,button",
        "-hover": "a,button",
        "-hidden": ".cuberto-hidden",
      },
      skewing: 2,
    });
    cursor.init();
  });

  return (
    <div>
      <HomeSection />
      <ServicesSection />
      <SocialProof />
      <ThreatSection />
      <TimelineSection />
      <Contact />
    </div>
  );
}
