import MainLayout from "../layout/MainLayout";
import SIGE from '../componentes/SIGE'

import Visitanos from "../componentes/Visitanos";

import {
  DocumentTextIcon,
  CubeTransparentIcon,
  BriefcaseIcon
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Subvenciones.',
    description:
      'Le ayudamos en la tramitación y gestión de subvenciones adecuadas a su caso para la mejora de su empresa.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Asesoría.',
    description: 'Estudio integral y detallado de la empresa para asesorarte y obtener la máxima rentabilidad de su actividad.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Proyectos.',
    description: 'Más de 30 años de experiencia para ofrecerle un estudio personal en profundidad de su explotación.',
    icon: BriefcaseIcon,
  },
]

function Inicio() {
  return (
    <MainLayout>
      <SIGE />
      <div className="overflow-hidden py-24 sm:py-32 bg-[color:var(--colorGris)]" id="salto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
            <div>
              <div className="lg:w-[60rem] w-[23rem] sm:w-[30rem] lg:block flex flex-col justify-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorBlanco)] sm:text-4xl">Nuestros Servicios</p>
                <p className="mt-6 text-lg leading-8 text-[color:var(--colorBlanco)]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 text-base leading-7 text-[color:var(--colorBlanco)] lg:max-w-none sm:flex">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative sm:my-0 mt-4">
                      <dt className="inline font-semibold text-[color:var(--colorBlanco)] pl-6">
                        <a href={"/" + (feature.name).slice(0, -1)} className="hover:text-[var(--colorPrincipal)] transiciones">
                          <feature.icon className="absolute left-0 h-5 w-5 top-1 text-[var(--colorPrincipal)]" />
                          {feature.name}
                        </a></dt>{' '}
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

export default Inicio