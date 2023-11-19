import { use, useEffect, useRef, useState } from "react";

export default function PostContainer({ post }) {
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    setContent(post.content);
    setHeight();
  }, [post]);

  useEffect(() => {
    setHeight();
  }, [content]);

  const setHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await fetch(`/api/rst/update?id=${post.id}&content=${content}`);
    console.log("TEST result", result);
  };

  return (
    <div className="w-full flex flex-col gap-3 py-5 border-b-2 border-gray-400/60">
      <div className="w-full flex justify-between px-5 text-gray-500/50">
        <a href={`rst/${post.username}`} className="hover:text-gray-500/80">
          {post.username}
        </a>
        <p>{new Date(Number(post.date)).toLocaleString()}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea ref={textareaRef} rows="1" value={content} onChange={handleChange} wrap="soft" className="w-full p-5 bg-white/20 border-none focus:outline-none resize-none"></textarea>
      </form>
      <div className="w-full flex justify-between px-5 text-gray-500/50">
        <button className="hover:text-gray-500/80">Reply</button>
        <button className="hover:text-gray-500/80">Delete</button>
      </div>
    </div>
  );
}
