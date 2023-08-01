import MainLayout from "../layout/MainLayout";
import Breadcrumb from '../componentes/Breadcrumb'

import Visitanos from "../componentes/Visitanos";

const features = [
    {
        name: 'Laboral.',
        description:
            'Somos especialistas en gestión laboral, brindando servicios ágiles y precisos en tramitación de ayudas y prestaciones, elaboración minuciosa de contratos y nóminas, seguimiento meticuloso de altas en Seguridad Social, asesoramiento experto en Recursos Humanos y asistencia legal confiable para inspecciones, garantizando tranquilidad y cumplimiento normativo.',
        icon: "network-wired",
    },
    {
        name: 'Agrícola.',
        description: 'Te ofrecemos un servicio integral con estudio personalizado de explotación para máxima rentabilidad, matriculación de maquinaria, cambios de titularidad y transferencias de ayudas PAC, y modificaciones catastrales y cambios de uso SIXPAC.',
        icon: "leaf",
    },
    {
        name: 'Fiscal.',
        description: 'Ofrecemos gestiones con la Agencia Tributaria, incluyendo Declaraciones de la Renta, Impuesto de Sociedades, IVA, contabilidad para empresas, constitución de sociedades y tramitación de impuesto de sucesiones. También gestionamos trámites catastrales y brindamos asistencia en inspecciones fiscales, con eficiente planificación tributaria.',
        icon: "gavel",
    },
    {
        name: 'Jurídica.',
        description: 'Brindamos servicios legales integrales, incluyendo la elaboración de contratos, asistencia en litigios judiciales y procedimientos contencioso-administrativos. Además, proporcionamos asesoramiento especializado en procesos sancionadores por infracción de normativa medioambiental, así como en cuestiones de derechos de propiedad y acceso al Registro de la Propiedad de inmuebles.',
        icon: "briefcase",
    },
]

function Asesoria() {
    return (
        <MainLayout>
            <Breadcrumb texto={"Asesoría"} descripcion={"Aunamos experiencia y conocimientos para ayudarle a cumplir con sus obligaciones fiscales y laborales."} />
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