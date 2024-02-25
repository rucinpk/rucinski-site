import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import head from "../../../public/head.png";
import useTypewriter from "../hooks/useTypewriter";
import useMagneto from "../hooks/useMagneto";

const Contact = () => {
  const words = ["connect", "collaborate", "work together"];
  const { cursor, typewriter } = useTypewriter(words);
  const { magneto } = useMagneto();
  return (
    <section className="bg-secondary z-10 relative pt-96 pb-16 flex flex-col justify-between">
      <div className="flex justify-between flex-col px-96">
        <div className="flex gap-8 items-center">
          <Image
            src={head}
            alt="Nexio"
            width={200}
            height={200}
            className="rounded-full w-20 h-20 object-cover"
          />
          <h6 className="font-extrabold text-4xl leading-loose lg:text-6xl md:text-5xl sm:text-4xl">
            <span className="text-nowrap whitespace-nowrap ">
              Let&apos;s <span className="text-primary" ref={typewriter} />
            </span>
            <span className="text-primary" ref={cursor}>
              |
            </span>
            <br />
          </h6>
        </div>
        <div className="self-end flex justify-between items-center w-full">
          <a
            href="#"
            className="h-20 relative inline-flex justify-center items-center btn bg-primary rounded-xl text-secondary text-sm w-1/2 cuberto-hidden"
          >
           <p className="text-sm"> patryk@rucinski.ai</p>
          </a>
          <button ref={magneto} className="text magneto-big cuberto-hidden">
            <span className="magneto-text">Let&apos;s talk</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-end px-16">
        <div className="flex flex-col space-y-8">
          <p>
            <span>Warsaw, Poland</span>
          </p>
        </div>
        <p>
          <span>© 2023 Patryk Ruciński. All rights reserved.</span>
        </p>
        <div>
          <div className="home-sci flex justify-between z-20 gap-4">
            <a
              className="relative inline-flex items-center justify-center w-16 h-16 bg-transparent rounded-full overflow-hidden text-white z-10 text-4xl duration-500  hover:text-secondary border-2 border-primary"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="relative inline-flex items-center justify-center w-16 h-16 bg-transparent rounded-full overflow-hidden text-white z-10 text-4xl duration-500  hover:text-secondary border-2 border-primary"
              href="#"
            >
              <FaYoutube />
            </a>
            <a
              className="relative inline-flex items-center justify-center w-16 h-16 bg-transparent rounded-full overflow-hidden text-white z-10 text-4xl duration-500  hover:text-secondary border-2 border-primary"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
