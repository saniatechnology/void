export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-[#6E6E6E]">
      <main className="w-full h-full flex flex-col items-center font-courier">{children}</main>
    </div>
  );
}
