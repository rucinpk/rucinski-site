"use client";
import Image from "next/image";
import overlay from "../../../public/overlay.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useTypewriter from "../hooks/useTypewriter";

import cloudbest from "../../../public/logos/cloudbest.jpeg";
import devsData from "../../../public/logos/devs_data.jpg";
import here from "../../../public/logos/here.png";
import ing from "../../../public/logos/ing.jpg";
import paloAlto from "../../../public/logos/palo_alto.jpeg";
import comcert from "../../../public/logos/comcert.jpeg";
import useMagneto from "../hooks/useMagneto";

const SocialProof = () => {
  const words = ["Innovation,", "Technology,", "Security,", "Development,"];
  const { cursor, typewriter } = useTypewriter(words);
  const { magneto } = useMagneto();

  const references = [
    {
      description:
        "Web application has been developed proffesionally including clean UI and security requirements.",
      person: "Tomasz Chlebowski",
      company: "CEO ComCERT S.A.",
      image: "/tomasz.jpg",
    },
    {
      description: "The project was carried out realiably and on time.",
      person: "Dominik Curyło",
      company: "CEO Asteroid sp. z o.o.",
      image: "/dominik.jpg",
    },
    {
      description:
        "Patryk Ruciński has vast and deep knowledge about software and security. He can design and provide quality solution,",
      person: "Tom Potański",
      company: "CEO DevsData LLC",
      image: "/tom.jpeg",
    },
    {
      description:
        "I can confirm the experience of Patryk Ruciński in a field of programming skills in C++. He demonstrated realiable knowledge of cryptology and software security. He brought valuable knowledge which helped us a great deal to develop our application.",
      person: "Przemysław Ciężkowski",
      company: "Senior C++ Developer in Usecrypt S.A.",
      image: "/przemek.jpeg",
    },
  ];

  useGSAP(() => {
    const referenceDescription = document.getElementById(
      "reference-description"
    );
    const referencePerson = document.getElementById("reference-person");
    const referenceCompany = document.getElementById("reference-company");
    const referenceImage = document.getElementById("reference-image");

    if (
      !referenceDescription ||
      !referencePerson ||
      !referenceCompany ||
      !referenceImage
    )
      return;

    const referenceItems = [
      referenceDescription,
      referencePerson,
      referenceCompany,
      referenceImage,
    ];

    let currentReference = 0;
    let referenceInterval = setInterval(() => {
      gsap.to(referenceDescription, {
        onComplete: () => {
          referenceDescription.innerText =
            references[currentReference].description;
          referencePerson.innerText = references[currentReference].person;
          referenceCompany.innerText = references[currentReference].company;
          referenceImage.setAttribute(
            "src",
            references[currentReference].image
          );
        },
      });
      for (let referenceItem of referenceItems) {
        gsap.to(referenceItem, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            gsap.to(referenceItem, {
              duration: 0.5,
              opacity: 1,
            });
          },
        });
      }

      currentReference =
        currentReference === references.length - 1 ? 0 : currentReference + 1;
    }, 5000);

    return () => clearInterval(referenceInterval);
  });

  useGSAP(() => {
    const bgImgWrapper = document.getElementById("trust-img");
    const bgImages = document.querySelectorAll("div[id*=trust-img-]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgImgWrapper,
        start: "top center",
        scrub: true,
      },
    });

    bgImages.forEach((bg, index) => {
      const bgSpeed = bg.getAttribute("data-speed");
      if (!bgSpeed) return;

      tl.to(
        bg,
        {
          duration: 2,
          y: 20 * parseFloat(bgSpeed),
        },
        0
      );
    });
  });

  useGSAP(() => {
    gsap.registerEffect({
      name: "counter",
      extendTimeline: true,
      defaults: {
        end: 0,
        duration: 0.5,
        ease: "power1",
        increment: 1,
      },
      effect: (targets: any, config: any) => {
        let tl = gsap.timeline();
        let num = targets[0].innerText.replace(/\,/g, "");
        targets[0].innerText = num;
        console.log(num);
        tl.to(
          targets,
          {
            duration: config.duration,
            innerText: config.end,
            snap: { innerText: config.increment },
            modifiers: {
              innerText: function (innerText) {
                return gsap.utils
                  .snap(config.increment, innerText)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            onComplete: () => {
              targets[0].innerText = targets[0].innerText + "+";
            },
            ease: config.ease,
          },
          0
        );

        return tl;
      },
    });

    const bgImgWrapper = document.getElementById("numbers");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgImgWrapper,
        start: "top bottom-=100",
      },
    });
    tl.counter("#exp", { end: 8, ease: "linear", duration: 1 }, "-=0.5");
    tl.counter("#customers", { end: 25, increment: 1, duration: 2 }, "-=1");
    tl.counter("#projects", { end: 15, increment: 3, duration: 3 }, "-=1");
  });

  return (
    <section className="z-10 flex bg-gradient-to-b from-secondary to-primary from-45% to-100% relative">
      <div
        className="absolute pointer-events-none w-full -z-50 h-dvh"
        id="trust-img"
      >
        <div
          data-speed="5"
          id="trust-img-2"
          className="w-full h-full absolute z-20"
        >
          <Image
            src={overlay}
            alt="overlay"
            className="opacity-70 absolute bottom-0"
          />
        </div>
        <div
          data-speed="23"
          id="trust-img-3"
          className="w-full h-full absolute z-10 bg-gradient-radial-alt"
        ></div>
      </div>

      <div className="flex md:flex-row flex-col w-full relative items-center justify-around pt-40 pb-8 px-[9%]">
        <div className="md:w-1/2 flex flex-col justify-around h-full md:py-48">
          <h6 className="font-extrabold text-4xl leading-loose lg:text-6xl md:text-5xl sm:text-4xl">
            <span className="text-nowrap whitespace-nowrap ">
              Endorsed by Leaders in{" "}
              <span className="text-primary" ref={typewriter} />
            </span>
            <span className="text-primary" ref={cursor}>
              |
            </span>
            <br />
            <p className="text-xl font-bold"> Shaping the Future Together</p>
          </h6>
          <p className="text-2xl text-gray-500">
            My projects and expertise have secured the trust of esteemed
            partners and clients globally. From streamlining complex data
            workflows to developing innovative security solutions, I&apos;ve
            delivered state-of-the-art technology solutions across a variety of
            industries. My commitment to excellence is further demonstrated
            through my work with leading financial institutions and my
            engagement in cutting-edge blockchain audits, showcasing my
            versatility and reliability in delivering high-quality software
            solutions.
          </p>

          <div className="flex gap-16 social__proof" id="numbers">
            <div className="flex flex-col items-center text-center">
              <p className="text-6xl font-bold text-white" id="exp">
                0
              </p>
              <p className="font-semibold text-2xl">Years of experience</p>
            </div>
            <div className="border-separator"></div>
            <div className="flex flex-col items-center text-center">
              <p className="text-6xl font-bold text-white" id="customers">
                0
              </p>
              <p className="font-semibold text-2xl">Projects completed</p>
            </div>
            <div className="border-separator"></div>
            <div className="flex flex-col items-center text-center">
              <p className="text-6xl font-bold text-white" id="projects">
                0
              </p>
              <p className="font-semibold text-2xl">Happy customers</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 w-full p-16 items-center">
          <div className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-6 gap-4 w-full items-center justify-center">
              <div className="flex items-center justify-center">
                <Image
                  src={ing}
                  alt="cloudbest"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="flex items-center justify-center">
                {" "}
                <Image
                  src={here}
                  alt="cloudbest"
                  className="w-16 h-16 object-cover rounded-full bg-white"
                />
              </div>
              <div className="flex items-center justify-center">
                {" "}
                <Image
                  src={cloudbest}
                  alt="cloudbest"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div className="flex items-center justify-center">
                {" "}
                <Image
                  src={comcert}
                  alt="cloudbest"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="flex items-center justify-center">
                {" "}
                <Image
                  src={devsData}
                  alt="cloudbest"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="flex items-center justify-center">
                {" "}
                <Image
                  src={paloAlto}
                  alt="cloudbest"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-xl" id="reference-description">
              {references[references.length - 1].description}
            </p>
            <div className="flex items-center gap-4">
              <img
                id="reference-image"
                src={references[references.length - 1].image}
                alt={`${references[references.length - 1].person}`}
                width={100}
                height={100}
                className="rounded-full w-24 h-24 object-cover"
              />
              <div>
                <p id="reference-person">
                  {" "}
                  {references[references.length - 1].person}
                </p>
                <p id="reference-company">
                  {" "}
                  {references[references.length - 1].company}
                </p>
              </div>
            </div>
          </div>
          <button ref={magneto} className="text magneto cuberto-hidden">
            <span className="magneto-text">Let&apos;s talk</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
