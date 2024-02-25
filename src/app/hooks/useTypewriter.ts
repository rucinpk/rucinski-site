import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useTypewriter = (words: string[]) => {
  const typewriter = useRef(null);
  const cursor = useRef(null);

  useGSAP(() => {
    const mainTimeline = gsap.timeline({ repeat: -1 });
    let cursorTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

    words.forEach((word) => {
      const textTimeline = gsap.timeline({
        repeat: 1,
        repeatDelay: 2,
        yoyo: true,
      });
      textTimeline.to(typewriter.current, {
        duration: 1,
        text: word,
        onUpdate: () => {
          cursorTimeline.restart();
          cursorTimeline.pause();
        },
        onComplete: () => {
          cursorTimeline.play();
        },
      });
      mainTimeline.add(textTimeline);
    });

    cursorTimeline
      .to(cursor.current, {
        opacity: 1,
        duration: 0,
      })
      .to(cursor.current, {
        duration: 0,
        opacity: 0,
        delay: 0.8,
      });
  });

  return { typewriter, cursor };
};

export default useTypewriter;
