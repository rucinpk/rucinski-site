"use client";

import gsap, { Power4, Elastic } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useMagneto = () => {
  const magneto = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    if (!magneto.current) return;

    const magnetoText = magneto.current.querySelector(".magneto-text");

    const activeMagneto = (event: any) => {
      if (!magneto || !magneto.current || !magnetoText) return;

      let boundBox = magneto.current.getBoundingClientRect();
      const magnetoStrength = 40;
      const magnetoTextStrength = 80;
      const newX =
        (event.clientX - boundBox.left) / magneto.current.offsetWidth - 0.5;
      const newY =
        (event.clientY - boundBox.top) / magneto.current.offsetHeight - 0.5;

      gsap.to(magneto, {
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        duration: 1,
        ease: Power4.easeOut,
      });

      gsap.to(magnetoText, {
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        duration: 1,
        ease: Power4.easeOut,
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    if (!magneto) return;

    magneto.current.addEventListener("mousemove", activeMagneto);
    magneto.current.addEventListener("mouseleave", resetMagneto);
  });

  return { magneto };
};

export default useMagneto;
