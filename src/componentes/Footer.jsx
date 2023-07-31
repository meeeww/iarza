function Footer() {

    const footerNavs = [
        {
            label: "Empresa",
            items: [
                {
                    href: '/',
                    name: 'Inicio'
                },
                {
                    href: '/contacto',
                    name: 'Contacto'
                },
            ],
        },
        {
            label: "Servicios",
            items: [
                {
                    href: '/subvenciones',
                    name: 'Subvenciones'
                },
                {
                    href: '/asesoria',
                    name: 'Asesoría'
                },
                {
                    href: '/proyectos',
                    name: 'Proyectos'
                },
                {
                    href: '/otrosservicios',
                    name: 'Otros Servicios'
                },
            ]
        },

    ]

    return (
        <footer className="pt-10 bg-[color:var(--colorGris)]">
            <div className="mx-auto px-4 md:px-16">
                <div className="flex-1 mx-20 space-y-6 justify-around sm:flex md:space-y-0 text-center sm:text-left">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-[color:var(--colorBlanco)]"
                                key={idx}
                            >
                                <h4 className="text-[color:var(--colorBlanco)] font-semibold text-lg sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="hover:text-[color:var(--colorPrincipal)] duration-150"

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <div className="flex flex-col mx-20 justify-center text-[color:var(--colorBlanco)] text-center sm:text-left">
                        <p>©2023 Ingeniería Arza S.L.</p>
                        <p>Todos los derechos reservados.</p>
                    </div>
                    <div className="flex mx-20 items-center gap-x-6 text-[color:var(--colorBlanco)] mt-6 text-center sm:justify-center justify-evenly">
                        <a href="www.facebook.com/people/Ingeniería-Arza/100063934699829/" target="_blank">
                            <i className="fa-brands fa-facebook hover:text-[color:var(--colorPrincipal)] text-2xl"></i>
                        </a>
                        <a href="www.youtube.com/@ingenieriaarzas.l.7031" target="_blank">
                            <i className="fa-brands fa-youtube hover:text-[color:var(--colorPrincipal)] text-2xl"></i>
                        </a>
                        <a href="mailto:info@iarza.com">
                            <i className="fa-solid fa-envelope hover:text-[color:var(--colorPrincipal)] text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer