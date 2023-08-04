function Footer() {

    const footerNavs = [
        {
            label: "Empresa",
            icon: "building",
            items: [
                {
                    href: '/',
                    name: 'Inicio'
                },
                {
                    href: '/contacto',
                    name: 'Contacto'
                },
                {
                    href: '/otrosservicios',
                    name: 'Otros Servicios'
                },
            ],
        },
        {
            label: "Servicios",
            icon: "gears",
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
            ]
        },
        {
            label: "Legal",
            icon: "scale-balanced",
            items: [
                {
                    href: '/avisolegal',
                    name: 'Aviso Legal'
                },
                {
                    href: '/politicaprivacidad',
                    name: 'Política de Privacidad'
                },
                {
                    href: '/politicacookies',
                    name: 'Política de Cookies'
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
                                    <i className={"fa-solid fa-" + item.icon + " pr-2"}></i>
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
                        <div className="flex flex-row">
                            <p className="flex">©2023
                                <a className="ml-2" style={{color: "var(--colorPrincipal)"}} href="/">Ingeniería Arza S.L.
                                </a>
                            </p>
                        </div>
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