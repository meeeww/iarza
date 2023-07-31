import MainLayout from "../layout/MainLayout";

function NotFound() {
  return (
    <MainLayout>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h5 className="text-3xl font-semibold tracking-tight text-[color:var(--colorPrincipal)] sm:text-5xl">
              Error 404.
            </h5>
            <h1 className="text-4xl font-bold tracking-tight text-[color:var(--colorGris)] sm:text-6xl">
              Página no encontrada.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[color:var(--colorGris)]">
              Lo sentimos, la página a la que intentas acceder no existe.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-[color:var(--colorPrincipal)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 transiciones focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Volver al Inicio
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
    </MainLayout>
  )
}

export default NotFound
