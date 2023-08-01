import MainLayout from "../layout/MainLayout";
import Breadcrumb from '../componentes/Breadcrumb'

import Visitanos from "../componentes/Visitanos";

import Cow from "@react-icons/all-files/gi/GiCow"
import Pig from "@react-icons/all-files/gi/GiPig"
import Bird from "@react-icons/all-files/gi/GiSeagull"
import Agro from "@react-icons/all-files/gi/GiFactory"


const features = [
    {
        name: 'Vacuno.',
        description:
            'Nos comprometemos a realizar un estudio integral de tu explotación, analizando la situación actual, reformas a realizar e instalaciones a ampliar. Te asesoramos para que realices tus inversiones con el menor coste posible y emplees aquellos materiales e instalaciones más punteras tecnológicamente y consigas la mayor rentabilidad. Realizamos proyectos de reforma y ampliación de establos de vacuno de leche y carne, zonas de ordeño, silos, fosas de purín, almacenes…',
        icon: Cow.GiCow,
    },
    {
        name: 'Porcino.',
        description: 'Las explotaciones de porcino (ciclo cerrado, cebo, madres…) en régimen intensivo y extensivo son empresas muy avanzadas tecnológicamente y que requieren un alto grado de profesionalidad y de especialización. Somos responsables del diseño y puesta en funcionamiento de un considerable número de explotaciones de porcino, punteras a nivel autonómico, por lo que nos ponemos a tu disposición para diseñar y poner en funcionamiento tu actividad o para mejorarla y modernizarla.',
        icon: Pig.GiPig,
    },
    {
        name: 'Aves.',
        description: 'Las explotaciones avícolas (pollos, pavos, patos, gallinas…) en régimen intensivo y extensivo son empresas muy avanzadas tecnológicamente y que requieren un alto grado de profesionalidad y de especialización. Somos responsables del diseño y puesta en funcionamiento de un considerable número de explotaciones avícolas, punteras a nivel autonómico, por lo que nos ponemos a tu disposición para diseñar y poner en funcionamiento tu actividad. Asimismo, si posees una explotación avícola y no sacas el máximo rendimiento a tu sistema informático, nos comprometemos a asesorarte con nuestros especialistas para mejorar tus producciones.',
        icon: Bird.GiSeagull,
    },
    {
        name: 'Agroindustrial.',
        description: 'El sector agroindustrial tiene una gran importancia a nivel autonómico, cara a sacar la máxima rentabilidad posible a nuestras materias primas de origen agrícola y ganadero. Ponemos a tu disposición nuestra amplia experiencia en la realización de proyectos agroindustriales (tratamiento y envasado de leche y productos lácteos, queserías, plantas de tratamiento y envasado de miel, castañas, setas, patatas, salas de despiece, venta directa…) para darle la mejor solución a tu proyecto. Estamos especializados en la elaboración de APPC y en el análisis de puntos críticos.',
        icon: Agro.GiFactory,
    },
]

function Proyectos() {
    return (
        <MainLayout>
            <Breadcrumb texto={"Proyectos"} descripcion={"Nuestra empresa es una referencia en el sector a nivel autonómico y estatal, por lo que ponemos a tu disposición nuestra amplia experiencia de más de 20 años, ofreciéndote un estudio personal y profundo de la situación de tu explotación, cara a reducir costes, mejorar los recursos disponibles y realizar aquellas inversiones que se estimen necesarias."} />
            <div className="overflow-hidden py-24 sm:py-32 bg-[color:var(--colorGris)]" id="salto">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
                        <div>
                            <div className="lg:w-[60rem] w-[23rem] sm:w-[30rem] lg:block flex flex-col justify-center">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorBlanco)] sm:text-4xl">Nuestros Proyectos</p>
                                <p className="mt-6 text-lg leading-8 text-[color:var(--colorBlanco)]">
                                La situación actual del sector agrario y ganadero exige empresas cada vez más competitivas, avanzadas tecnológicamente y dinámicas,optimizando todos los recursos disponibles para sobrevivir en este mundo globalizado.
                                </p>
                                <dl className="mt-10 text-base leading-7 text-[color:var(--colorBlanco)] lg:max-w-none sm:grid grid-cols-2 gap-8">
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

export default Proyectos