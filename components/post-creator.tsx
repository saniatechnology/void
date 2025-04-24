import { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import WidthAdapter from "./width-adapter";
import checkIcon from "../public/icons/check-dark.svg";
import closeIcon from "../public/icons/close-dark.svg";
import { PostCreatorProps } from "../types/post";

export default function PostCreator({ setShowPostCreator, fetchFeed, username }: PostCreatorProps) {
  const [content, setContent] = useState<string>("");
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);
  const [isHovered, setIsHovered] = useState<"close" | "check" | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setHeight();
  }, [content]);

  const setHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    updateDateTime();

    const now = new Date();
    const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    const timeout = setTimeout(() => {
      updateDateTime();
      const interval = setInterval(updateDateTime, 60000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleCreatePost = async (event: FormEvent) => {
    event.preventDefault();

    if (content === "") {
      setShowPostCreator(false);
      return;
    }

    const result = await fetch(`/api/rst/post?username=${username}&content=${content}`);
    if (result.ok) {
      fetchFeed();
      setContent("");
      setShowPostCreator(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed flex flex-col bg-[#CACACA] border-b border-red">
      <WidthAdapter>
        <nav className="flex justify-between items-end gap-5 w-full h-[8rem] px-5 py-[1.5rem] text-[#6E6E6E]">
          <div className="flex gap-5">
            <Link href="/" className="">
              Void
            </Link>
            <span className="">{">"}</span>
            <span className="">{username}</span>
          </div>
          <div>{currentDateTime ? currentDateTime.toLocaleDateString() + ", " + currentDateTime.toLocaleTimeString().slice(0, -3) : "Loading..."}</div>
        </nav>
      </WidthAdapter>
      <WidthAdapter>
        <form onSubmit={handleCreatePost}>
          <textarea ref={textareaRef} rows={1} value={content} onChange={handleChange} wrap="soft" className={"w-full p-5 bg-[#E9E7E7] border-none focus:outline-none resize-none"}></textarea>
        </form>
      </WidthAdapter>
      <div className="flex divide-x divide-[#E9E7E7] w-full h-[70px] fixed bottom-0 text-[#6E6E6E] border-t border-[#E9E7E7]">
        <div className={`flex-1 flex items-center justify-end pr-28 ${isHovered === "close" ? "bg-[#ff7563]" : ""}`}>
          <button onClick={() => setShowPostCreator(false)} onMouseEnter={() => setIsHovered("close")} onMouseLeave={() => setIsHovered(null)} className="cursor-pointer">
            <Image src={closeIcon} alt="My SVG Image" width={30} height={30} />
          </button>
        </div>
        <div className={`flex-1 flex items-center pl-28 ${isHovered === "check" ? "bg-[#FFEA63]" : ""}`}>
          <button onClick={(e) => handleCreatePost(e)} onMouseEnter={() => setIsHovered("check")} onMouseLeave={() => setIsHovered(null)} className="cursor-pointer">
            <Image src={checkIcon} alt="My SVG Image" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
