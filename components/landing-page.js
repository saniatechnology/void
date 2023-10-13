function SnippetContainer({ href, children }) {
  return (
    <a href={href} target="_blank" className="w-full p-5 bg-white/50 hover:bg-white/70 transition-all duration-200 flex flex-col justify-between basis-1/2 gap-6">
      {children}
    </a>
  );
}

function ProjectSnippets() {
  return (
    <>
      <SnippetContainer href="https://geo.softer.systems">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Geo</h2>
          {/* <h3 className="opacity-50">Mobile app</h3> */}
        </div>
        <p>A collaborative and modular maps app.</p>
      </SnippetContainer>
      <SnippetContainer href="https://biensur.online">
        <div className="flex justify-between items-center	">
          <h2 className="text-xl">Bien Sûr</h2>
          {/* <h3 className="opacity-50">Musician's site</h3> */}
        </div>
        <p>A contact point and promotional tool for a musician.</p>
      </SnippetContainer>
    </>
  );
}

export default function LandingPage({ preview, allPosts }) {
  return (
    <section className="md:w-[50%] my-20 py-10 px-5 sm:px-10 flex flex-col justify-between gap-5 font-courier">
      <h1 className="w-full px-5 text-xl text-left bg-white">Softer Systems</h1>
      <p className="px-5">is a tech label exploring a cuter future.</p>
      <h3 className="w-full px-5 text-left">Projects:</h3>
      <ProjectSnippets />
      <h3 className="w-full px-5 text-left">By:</h3>
      <a href="/sania" className="px-5 underline opacity-50 hover:opacity-70 duration-200 transition-colors">
        Sania García
      </a>
    </section>
  );
}
