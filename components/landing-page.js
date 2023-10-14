import Container from "./container";

function ProjectContainer({ href, target, children }) {
  return (
    <a href={href} target={target} className="w-full p-5 bg-white/50 hover:bg-white/70 transition-all duration-200 flex flex-col justify-between basis-1/2 gap-6">
      {children}
    </a>
  );
}

export default function LandingPage() {
  return (
    <>
      <h1 className="w-full px-5 text-xl text-left bg-white">Softer Systems</h1>
      <p className="px-5">is a tech label exploring a cuter future.</p>
      <h3 className="w-full px-5 text-left">Live:</h3>
      <ProjectContainer href="https://biensur.online" target="_blank">
        <div className="flex justify-between items-center	">
          <h2 className="text-xl">Bien Sûr</h2>
          {/* <h3 className="opacity-50">Musician's site</h3> */}
        </div>
        <p>A digital contact card for a musician.</p>
      </ProjectContainer>
      <h3 className="w-full px-5 text-left">WIP:</h3>
      <ProjectContainer href="https://geo.softer.systems" target="_blank">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Geo</h2>
          {/* <h3 className="opacity-50">Mobile app</h3> */}
        </div>
        <p>A collaborative and modular maps app.</p>
      </ProjectContainer>
      <ProjectContainer href="/rst">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">RST</h2>
          {/* <h3 className="opacity-50">Mobile app</h3> */}
        </div>
        <p>Intimate-scale micro blogging.</p>
      </ProjectContainer>
      <h3 className="w-full px-5 text-left">By:</h3>
      <a href="/sania" className="px-5 underline opacity-50 hover:opacity-70 duration-200 transition-colors">
        Sania García
      </a>
    </>
  );
}
