import MainLayout from "../layout/MainLayout";

function Contacto() {

  const contactMethods = [
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ,
      contact: "info.arza@iarza.com"
    },
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ,
      contact: "+34 982 20 14 28"
    },
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ,
      contact: "Rúa Peña Anda, 12, 27002 Lugo"
    },
  ]

  return (
    <MainLayout>
      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-[color:var(--colorGris)] md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-[color:var(--colorPrincipal)] font-semibold">
                Contacto
              </h3>
              <p className="text-[color:var(--colorGris)] text-3xl font-semibold sm:text-4xl">
                Contacta con nosotros
              </p>
              <p>
                Rellena el formulario o contacta con nosotros a través de nuestro teléfono y le responderemos lo antes posible.
              </p>
              <div className="flex flex-col justify-center items-center">
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {
                    contactMethods.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-x-3">
                        <div className="flex-none text-[color:var(--colorGris)]">
                          {item.icon}
                        </div>
                        <p>{item.contact}</p>
                      </li>
                    ))
                  }
                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.6024177678537!2d-7.552206287870309!3d43.0077056938189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31ce8c09ec3391%3A0x8c15da6c6ce4749d!2sIngenier%C3%ADa%20Arza%20S.L.!5e0!3m2!1ses!2ses!4v1690831545740!5m2!1ses!2ses" width="510" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="my-8"></iframe>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <label className="font-medium">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-[color:var(--colorGris)] bg-transparent outline-none border focus:border-[color:var(--colorPrincipal)] shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-[color:var(--colorGris)] bg-transparent outline-none border focus:border-[color:var(--colorPrincipal)] shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Asunto
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-[color:var(--colorGris)] bg-transparent outline-none border focus:border-[color:var(--colorPrincipal)] shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Mensaje
                  </label>
                  <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[color:var(--colorPrincipal)] shadow-sm rounded-lg"></textarea>
                </div>
                <button
                  className="w-full px-4 py-2 text-white font-medium bg-[color:var(--colorGris)] hover:scale-105 active:bg-[color:var(--colorPrincipal)] rounded-lg duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Contacto