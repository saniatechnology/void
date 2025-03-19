export default function WidthAdapter({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-[40rem] px-5 mx-auto">{children}</div>;
}
