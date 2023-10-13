export default function Intro() {
  return (
    <section className={`max-w-[20rem] px-10 py-20 flex flex-col gap-3 text-base md:text-xl tracking-tighter font-courier`}>
      <p>
        <span className="text-black bg-white">Softer Systems</span> is a tech label exploring a cuter future.
      </p>
      <p>
        First project: <a href="https://geo.softer.systems" className="text-black bg-pink-100 hover:text-pink-500 duration-200 transition-colors">Geo</a>
      </p>
      <p>
        By: <a href="https://geo.softer.systems" className="text-black bg-pink-100 hover:text-pink-500 duration-200 transition-colors">Sania</a>
      </p>
    </section>
  );
}
