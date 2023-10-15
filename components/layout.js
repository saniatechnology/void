export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-300">
      <main className="w-full flex flex-col items-center">{children}</main>
    </div>
  );
}
