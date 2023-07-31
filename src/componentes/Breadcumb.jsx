function Breadcumb() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--colorGris)] sm:text-6xl">
            Software Informe SIGE Porcino
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--colorGris)]">
            Ingeniería Arza S.L. ha desarrollado un completo software para la realización del Informe SIGE para las explotaciones de porcino españolas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/transporte"
              className="rounded-md bg-[color:var(--colorPrincipal)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 transiciones focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Saber Más
            </a>
            <a href="/contacto" className="text-sm font-semibold leading-6 text-[color:var(--colorGris)] hover:scale-105 transiciones">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
      </div>
    </div>
  )
}

export default Breadcumb