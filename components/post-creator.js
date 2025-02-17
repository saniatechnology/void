import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WidthAdapter from "./width-adapter";
import checkIcon from "../public/icons/check-dark.svg";
import closeIcon from "../public/icons/close-dark.svg";

export default function PostCreator({ setShowPostCreator, fetchFeed, username }) {
  const [content, setContent] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    setHeight();
  }, [content]);

  const setHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleCreatePost = async (event) => {
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
    <div className="w-[100vw] h-[100vh] fixed pt-[8rem] flex flex-col bg-[#CACACA] border-b border-red">
      <WidthAdapter>
        <form onSubmit={handleCreatePost}>
          <textarea ref={textareaRef} rows="1" value={content} onChange={handleChange} wrap="soft" className={"w-full p-5 bg-[#E9E7E7] border-none focus:outline-none resize-none"}></textarea>
        </form>
      </WidthAdapter>
      <div className="flex divide-x divide-[#E9E7E7] w-full h-[70px] fixed bottom-0 text-[#6E6E6E] border-t border-[#E9E7E7]">
        <div className={`flex-1 flex items-center justify-end pr-28 ${isHovered === "close" ? "bg-[#ff7563]" : ""}`}>
          <button onClick={() => setShowPostCreator(false)} onMouseEnter={() => setIsHovered("close")} onMouseLeave={() => setIsHovered(null)} className="h-fit hover:text-gray-500/80">
            <Image src={closeIcon} alt="My SVG Image" width={30} height={30} />
          </button>
        </div>
        <div className={`flex-1 flex items-center pl-28 ${isHovered === "check" ? "bg-[#FFEA63]" : ""}`}>
          <button onClick={(e) => handleCreatePost(e)} onMouseEnter={() => setIsHovered("check")} onMouseLeave={() => setIsHovered(null)} className="hover:text-gray-500/80">
            <Image src={checkIcon} alt="My SVG Image" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
