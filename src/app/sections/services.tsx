"use client";
import gsap from "gsap";

import {
  FaCloud,
  FaRobot,
  FaServer,
  FaCode,
  FaFirefoxBrowser,
} from "react-icons/fa6";

import { TiTick } from "react-icons/ti";

import { useGSAP } from "@gsap/react";

const ServicesSection = () => {
  useGSAP(() => {
    const entries = document.querySelectorAll(".entry");
    entries.forEach((entry) => {
      let entryMeta = entry.querySelector(".entry__meta");
      let entryDescription = entry.querySelector(".entry__description");

      if (!entryMeta || !entryDescription) return;

      const codeLeft = entryMeta.querySelector(".shield");
      const codeRight = entryDescription.querySelector(".shield");

      if (!codeLeft || !codeRight) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: entry,
          start: "top bottom",
          end: "bottom 70%",
          scrub: true,
        },
        onComplete: () => {
          gsap.to(codeLeft, {
            scale: 1.5,
            duration: 0.5,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "5%",
            margin: "5 0 5 5",
          });
          gsap.to(codeRight, {
            scale: 1.5,
            duration: 0.5,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "5%",
            margin: "5 5 5 0",
          });
          codeLeft.classList.add("backdrop-filter", "backdrop-blur-md");
          codeRight.classList.add("backdrop-filter", "backdrop-blur-md");
        },
        onReverseComplete: () => {
          gsap.to(codeLeft, {
            scale: 1,
            duration: 0.5,
            background: "transparent",
            borderRadius: "0",
            margin: "0",
          });
          gsap.to(codeRight, {
            scale: 1,
            duration: 0.5,
            background: "transparent",
            borderRadius: "0",
            margin: "0",
          });
          codeLeft.classList.remove("backdrop-filter", "backdrop-blur-md");
          codeRight.classList.remove("backdrop-filter", "backdrop-blur-md");
        },
      });

      tl.fromTo(
        entryMeta,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1 }
      );
      tl.fromTo(
        entryDescription,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        "<"
      );
    });
  });

  return (
    <section id="services">
      <div className="entry grid md:grid-cols-2 relative z-20">
        <div className="entry__meta p-4 rounded-l-lg h-full">
          <h4>Backend Development</h4>
          <p className="md:mr-32">
            As a seasoned full-stack developer, my backend development prowess
            is grounded in creating scalable, efficient systems that power
            complex applications. My experience spans from enhancing
            Python-based workflows for billing and usage reporting to
            architecting robust applications for data aggregation and security
            analysis, demonstrating a keen ability to innovate and optimize
            backend solutions.
          </p>
          <div className="md:block hidden absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            <FaCode className="w-32 h-32 translate-x-16 shield bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <FaServer className="w-48 h-48 md:opacity-100 opacity-25" />
        </div>
        <div className="entry__description p-4 rounded-r-lg h-full">
          <div className="md:block hidden absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            <FaCode className="w-32 h-32 -translate-x-16 shield  bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>

          <ul className="space-y-8 md:ml-32 w-1/2 justify-between flex flex-col">
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0 relative">
                <TiTick className=" text-primary" />
              </div>
              <p>Django, Fast API, Flask as Web Frameworks</p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0 relative">
                <TiTick className=" text-primary" />
              </div>
              <p>C/C++ for computing intensive computations</p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0 relative">
                <TiTick className=" text-primary" />
              </div>
              <p>SOLID principles for clean and maintainable code</p>
            </li>
          </ul>
          <ul className="space-y-8 w-1/2 justify-between flex flex-col">
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0 relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>PyTest and Unittest for writing test cases and test driven</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0 relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>SQL & NoSQL databases for data storage and retrieval</p>
            </li>{" "}
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0 relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>GIT for version control and CI/CD for deployment</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="entry grid md:grid-cols-2 relative z-20">
        <div className="entry__meta p-4 rounded-l-lg">
          <h4>Front End Development</h4>
          <p className="md:mr-32">
            My front-end development expertise is characterized by the creation
            of intuitive, responsive interfaces that engage and inform. From
            developing applications that simplify complex data presentation to
            leading the front-end design for educational and product delivery
            platforms, I blend technical skill with creative vision to produce
            compelling user experiences.
          </p>
          <div className="md:block hidden absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            {" "}
            <FaCode className="w-32 h-32 translate-x-16 shield bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <FaFirefoxBrowser className="w-48 h-48 md:opacity-100 opacity-25" />
        </div>
        <div className="entry__description p-4 rounded-r-lg">
          <div className="md:block hidden absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            <FaCode className="w-32 h-32 -translate-x-16 shield  bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>

          <ul className="space-y-8 md:ml-32 w-1/2 justify-between flex flex-col">
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>
                React, Next.js, Vue.js for building interactive and responsive
                UI
              </p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>
                Tailwind CSS, Bootstrap for creating modern and responsive
                designs
              </p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>
                Webpack, Babel for bundling and transpiling JavaScript and CSS
              </p>
            </li>
          </ul>
          <ul className="space-y-8 w-1/2 justify-between flex flex-col">
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                Jest, Mocha for writing test cases and test driven development
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                TypeScript, Flow for type checking and writing maintainable code
              </p>
            </li>{" "}
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                GraphQL, REST API for fetching and updating data from the server
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="entry grid md:grid-cols-2 relative z-20">
        <div className="entry__meta p-4 rounded-l-lg ">
          <h4>AI & ML Apps</h4>
          <p className="md:mr-32">
            My work in AI and ML spans developing systems that leverage deep
            learning for real-world applications, from public transport
            passenger tracking to automating security analysis. By applying
            cutting-edge technologies, I&apos;ve delivered solutions that not only
            meet but exceed project goals, showcasing a deep understanding of
            AI&apos;s transformative potential.
          </p>

          <div className="md:block hidden absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            {" "}
            <FaCode className="w-32 h-32 translate-x-16 shield bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <FaRobot className="w-48 h-48 md:opacity-100 opacity-25" />
        </div>
        <div className="entry__description  p-4 rounded-r-lg h-full">
          <div className="md:block hidden absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            <FaCode className="w-32 h-32 -translate-x-16 shield  bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>
          <ul className="space-y-8 md:ml-32 w-1/2 justify-between flex flex-col">
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>
                TensorFlow, Keras for building and training deep learning models
              </p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>Secured and scalable cloud infrastructure for your business</p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>
                OpenCV, Dlib for computer vision and facial recognition systems
              </p>
            </li>
          </ul>
          <ul className="space-y-8 w-1/2 justify-between flex flex-col">
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                Scikit-learn, Pandas for data analysis and machine learning
                algorithms
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>ChatGPT and OpenAI APIs for faster development process</p>
            </li>{" "}
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                Understanding of applied machine learning and deep learning
                algorithms (CNN, RNN, LSTM, GAN, etc.)
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="entry grid md:grid-cols-2 relative z-20">
        <div className="entry__meta p-4 rounded-l-lg h-full">
          <h4>AWS</h4>
          <p className="md:mr-32">
            My AWS expertise is demonstrated through the deployment and
            management of scalable cloud solutions that support complex
            applications. From utilizing EC2 and S3 for hosting and storage to
            leveraging AWS security practices for data protection, my work
            ensures high availability, performance, and security in the cloud.
          </p>
          <div className="md:block hidden absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            {" "}
            <FaCode className="w-32 h-32 translate-x-16 shield bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <FaCloud className="w-48 h-48  md:opacity-100 opacity-25" />
        </div>
        <div className="entry__description  p-4 rounded-r-lg h-full">
          <div className="md:block hidden absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden py-6">
            {" "}
            <FaCode className="w-32 h-32 -translate-x-16 shield  bg-primary bg-opacity-25 p-4 rounded-lg text-black" />
          </div>

          <ul className="space-y-8 md:ml-32 w-1/2 justify-between flex flex-col">
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>
                EC2 and EC2 auto scaling groups for hosting and scaling web
                applications
              </p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>S3 for storage and hosting static websites and assets</p>
            </li>
            <li className="gap-4 items-center flex">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className=" text-primary" />
              </div>
              <p>Lambda for easy and cost-effective serverless computing</p>
            </li>
          </ul>
          <ul className="space-y-8 w-1/2 justify-between flex flex-col">
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>RDS and DynamoDB for relational and NoSQL databases</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                CloudFront, Route 53 for content delivery and domain name
                management
              </p>
            </li>{" "}
            <li className="flex gap-4 items-center">
              <div className="lock__icon_wrapper flex-shrink-0  relative">
                <TiTick className="w-8 h-8 text-primary" />
              </div>
              <p>
                SNS and SQS for messaging and queuing in distributed systems
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
