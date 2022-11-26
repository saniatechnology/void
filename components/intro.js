import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";
import whitePlasticLogo from "../public/white-plastic-logo-2.png";
import localFont from "@next/font/local";

const fontDigitalDream = localFont({ src: "../public/Digitaldream.ttf" });

export default function Intro() {
  return (
    <section className="h-[50vh] px-10 py-10 flex-col flex justify-between items-center">
      <h1
        className={`text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 ${fontDigitalDream.className}`}
      >
        GIRLY
      </h1>

      <p>A tech collective.</p>
      <div className="flex flex-row gap-10">
        <a
          href="https://twitter.com/GirlyDAO"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://github.com/GirlyDAO"
          className="underline hover:text-success duration-200 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://app.wonderverse.xyz/invite/8eXyL8MQALoTYw"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Wonder
        </a>
      </div>
    </section>
  );
}
