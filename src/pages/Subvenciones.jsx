import MainLayout from "../layout/MainLayout";
import Breadcrumb from '../componentes/Breadcrumb'

import Visitanos from "../componentes/Visitanos";

import {
    DocumentTextIcon,
    CubeTransparentIcon,
    BriefcaseIcon
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Pac Europea.',
        description:
            'Las ayudas de la Unión Europea en la actualidad son una importante fuente de ingresos para las explotaciones agrícolas y ganaderas, por lo que es muy importante una óptima gestión de las mismas. Te asesoramos para que obtengas la máxima rentabilidad a tus ayudas comunitarias: Solicitud Unificada, gestión de la Reserva Nacional para jóvenes agricultores...',
        icon: DocumentTextIcon,
    },
    {
        name: 'Agroindustria.',
        description: 'Ponemos a tu disposición nuestra amplia experiencia en la realización de proyectos agroindustriales (tratamiento y envasado de leche y productos lácteos, queserías, plantas de tratamiento y envasado de miel, castañas, setas, patatas, salas de despiece, venta directa...) para darle la mejor solución a tu proyecto. Estamos especializados en la elaboración de APPC y en el análisis de puntos críticos.',
        icon: CubeTransparentIcon,
    },
    {
        name: 'Planes de Mejora.',
        description: 'Ayuda autonómica anual destinada a la modernización y mejora de las explotaciones existentes. Las ayudas de la Unión Europea en la actualidad son una importante fuente de ingresos para las explotaciones agrícolas y ganaderas, por lo que es muy importante una óptima gestión de las mismas.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Incorporación de Jóvenes Agricultores.',
        description: 'Para mejorar los resultados económicos de las explotaciones agrarias y facilitar su modernización, estas subvenciones están destinadas a la reestructuración de las explotaciones agrarias facilitando la incorporación de nuevo personal. Destinadas al relevo generacional de las actividades existentes o a la creación de novas empresas agrarias.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Ayudas GDR para Innovadores.',
        description: 'Con el objetivo de apoyar iniciativas surgidas en el sector agroalimentario y dar oportunidades en diversificación de las producciones y suministro, se destinan subvenciones para ayudar a tu empresa. Contacta con nosotros y te asesoraremos sobre la mejor manera de llevar a cabo tu proyecto en materia de innovación.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Plan Renove.',
        description: 'Tramitación de ayudas destinadas a la renovación de maquinaria agrícola de las explotaciones agrícolas y ganaderas, mediante la adquisición de maquinaria nueva y desguace de maquinaria obsoleta y con deficiencias de seguridad.',
        icon: BriefcaseIcon,
    },
]

function Subvenciones() {
    return (
        <MainLayout>
            <Breadcrumb texto={"Subvenciones"} descripcion={"Nos ponemos a tu disposición para asesorarte en esta materia y te garantizamos la obtención de la mayor rentabilidad a tus inversiones y el máximo beneficio económico a tu actividad, realizando un estudio integral de tu actividad cara a obtener los máximos beneficios."} />
            <div className="overflow-hidden py-24 sm:py-32 bg-[color:var(--colorGris)]" id="salto">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
                        <div>
                            <div className="lg:w-[60rem] w-[23rem] sm:w-[30rem] lg:block flex flex-col justify-center">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorBlanco)] sm:text-4xl">Principales Ayudas</p>
                                <p className="mt-6 text-lg leading-8 text-[color:var(--colorBlanco)]">
                                    Nuestra empresa se ha especializado desde un principio en la tramitación de ayudas y subvenciones al sector agrícola y ganadero, ya que la obtención de estas ayudas es determinante para la viabilidad y rentabilidad de la mayoría de las explotaciones.
                                </p>
                                <dl className="mt-10 text-base leading-7 text-[color:var(--colorBlanco)] lg:max-w-none sm:grid grid-cols-3 gap-8">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative sm:my-0 mt-4">
                                            <dt className="inline font-semibold text-[color:var(--colorBlanco)] pl-6">
                                                <feature.icon className="absolute left-0 h-5 w-5 top-1 text-[var(--colorPrincipal)]" />
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

export default Subvenciones