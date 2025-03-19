// import { set } from "date-fns";
import { use, useEffect, useRef, useState } from "react";
import WidthAdapter from "./width-adapter";

interface Post {
  username: string;
  date: string;
  content: string;
}

interface PostContainerProps {
  post: Post;
}

export default function PostContainer({ post }: PostContainerProps) {
  // const [content, setContent] = useState("");
  // const [isDeleted, setIsDeleted] = useState(false);
  // const textareaRef = useRef(null);

  // useEffect(() => {
  //   setContent(post.content);
  //   setHeight();
  // }, [post]);

  // useEffect(() => {
  //   setHeight();
  // }, [content]);

  // const setHeight = () => {
  //   if (!textareaRef.current) return;
  //   textareaRef.current.style.height = "auto";
  //   textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  // };

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setContent(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const result = await fetch(`/api/rst/update?id=${post.id}&content=${content}`);
  //   console.log("TEST result", result);
  // };

  // const handleDelete = async (event) => {
  //   event.preventDefault();

  //   const result = await fetch(`/api/rst/delete?id=${post.id}`);
  //   if (result.ok) {
  //     setIsDeleted(true);
  //     setContent("");
  //     setPosts((prevPosts) => prevPosts.filter((prevPost) => prevPost.id !== post.id));
  //   }
  //   console.log("TEST result", result);
  // };

  return (
    <div className="w-full flex flex-col justify-between gap-5 bg-[#CACACA]  border-b border-[#6E6E6E]">
      <WidthAdapter>
        <div className={"w-full flex flex-col gap-3 pt-5 pb-6 cursor-default"}>
          <div className="w-full flex justify-between px-5 text-[#6E6E6E]">
            <p>{post.username}</p>
            <p>{new Date(Number(post.date)).toLocaleString().slice(0, -3)}</p>
          </div>
          <div className={"w-full p-5 bg-[#E9E7E7]"}>{post.content}</div>
          {/* <form onSubmit={handleSubmit}>
            <textarea ref={textareaRef} rows="1" value={content} onChange={handleChange} wrap="soft" className={"w-full p-5 bg-[#E9E7E7] border-none focus:outline-none resize-none"}></textarea>
          </form> */}
          {/* <div className="w-full flex justify-end px-5 text-[#6E6E6E]">
            <button onClick={handleDelete} className="hover:text-gray-500/80">
              Delete
            </button>
          </div> */}
        </div>
      </WidthAdapter>
    </div>
  );
}
