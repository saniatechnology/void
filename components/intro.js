import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";
import whitePlasticLogo from "../public/white-plastic-logo-2.png";
import localFont from "@next/font/local";

const fontDigitalDream = localFont({ src: "../public/Digitaldream.ttf" });

export default function Intro() {
  return (
    <section
      className={`px-10 py-10 flex  text-base md:text-3xl tracking-tighter  ${fontDigitalDream.className}`}
    >
      <p>
        <span className="text-black bg-white">GIRLY</span> is a small tech label
        exploring a radically softer and sweeter future / First project:{" "}
        <a
          href="https://layers.live"
          className="text-black bg-pink-100 hover:text-pink-500 duration-200 transition-colors"
        >
          Layers
        </a>{" "}
        / Connect on:{" "}
        <a
          href="https://twitter.com/GirlyDAO"
          className="text-gray-500 bg-teal-100 hover:text-teal-500 duration-200 transition-colors"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          href="https://app.cg/community/NCTwbWjKE5"
          className="text-gray-500 bg-teal-100 hover:text-teal-500 duration-200 transition-colors"
        >
          Common Ground
        </a>{" "}
        /{" "}
        <a
          href="https://app.wonderverse.xyz/invite/8eXyL8MQALoTYw"
          className="text-gray-500 hover:text-teal-500 duration-200 transition-colors"
        >
          Wonder
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/GIRLYDAO"
          className="text-gray-500 hover:text-teal-500 duration-200 transition-colors"
        >
          GitHub
        </a>{" "}
        / IRL :p
      </p>
    </section>
  );
}
