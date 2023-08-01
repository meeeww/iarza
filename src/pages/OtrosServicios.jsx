import MainLayout from "../layout/MainLayout";
import Breadcrumb from '../componentes/Breadcrumb'

import Visitanos from "../componentes/Visitanos";

const features = [
    {
        name: 'Mediciones informes y valoraciones.',
        description:
            'Ofrecemos servicios especializados en mediciones de parcelas agrícolas, así como en segregación y agrupación de terrenos. Nuestro equipo también proporciona informes y valoraciones detalladas de propiedades, instalaciones, edificaciones y maquinaria, asegurando una asesoría integral para todas tus necesidades.',
        icon: "pen-ruler",
    },
    {
        name: 'Legalización de aguas.',
        description: 'Ofrecemos servicios especializados en la legalización de pozos de barrena, artesianos, traídas de agua y comunidades de usuarios. También nos encargamos de la legalización y concesión de riegos, abastecimiento para usos ganaderos y domésticos, así como la legalización de vertidos y fosas sépticas, garantizando el cumplimiento normativo y la sostenibilidad ambiental en cada proceso.',
        icon: "droplet",
    },
    {
        name: 'Impacto ambiental.',
        description: 'Realizamos estudios y  seguimientos de impacto ambiental.',
        icon: "tree",
    },
    {
        name: 'Autorizaciones y licencias.',
        description: 'Realizamos todo tipo de autorizaciones y licencias.',
        icon: "file-signature",
    },
]

function Asesoria() {
    return (
        <MainLayout>
            <Breadcrumb texto={"Otros Servicios"} descripcion={"Aunamos experiencia y conocimientos para ayudarle a cumplir con sus obligaciones fiscales y laborales."} />
            <div className="overflow-hidden py-24 sm:py-32 bg-[color:var(--colorGris)]" id="salto">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
                        <div>
                            <div className="lg:w-[60rem] w-[23rem] sm:w-[30rem] lg:block flex flex-col justify-center">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorBlanco)] sm:text-4xl">Nuestras Asesorías</p>
                                <p className="mt-6 text-lg leading-8 text-[color:var(--colorBlanco)]">
                                Estudio integral, personalizado y detallado de la explotación para asesorarte y obtener la máxima rentabilidad de tu actividad, modernizando tus instalaciones, reduciendo costes y mejorando la productividad.
                                </p>
                                <dl className="mt-10 text-base leading-7 text-[color:var(--colorBlanco)] lg:max-w-none sm:grid grid-cols-2 gap-8">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative sm:my-0 mt-4">
                                            <dt className="inline font-semibold text-[color:var(--colorBlanco)] pl-6">
                                                <i className={"text-center absolute left-0 h-5 w-5 top-1 text-[var(--colorPrincipal)] fa-solid fa-" + feature.icon} />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Visitanos />
        </MainLayout>
    )
}

export default Asesoria