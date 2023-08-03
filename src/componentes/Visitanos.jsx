function Visitanos() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
          <div>
            <div className="lg:w-[60rem] w-[23rem] sm:w-[30rem] lg:block flex flex-col justify-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorGris)] sm:text-4xl">Visítanos En Nuestra Oficina</p>
              <div className='flex sm:flex-col flex-col items-center my-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.6024177678537!2d-7.552206287870309!3d43.0077056938189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31ce8c09ec3391%3A0x8c15da6c6ce4749d!2sIngenier%C3%ADa%20Arza%20S.L.!5e0!3m2!1ses!2ses!4v1690831545740!5m2!1ses!2ses" width="960" height="300" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div>
                  <p className="mt-6 text-lg leading-8 text-[color:var(--colorGris)]">
                    Si tienes algún proyecto en mente o quieres realizarnos cualquier consulta, no dudes en ponerte en contacto con nosotros.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="/contacto"
                      className="rounded-md bg-[color:var(--colorPrincipal)] px-3.5 py-2.5 text-sm font-semibold text-[var(--colorGris)] shadow-sm hover:scale-105 transiciones focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Contáctanos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visitanos