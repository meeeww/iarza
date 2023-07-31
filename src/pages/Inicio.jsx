import MainLayout from "../layout/MainLayout";
import Breadcumb from '../componentes/Breadcumb'
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
      <Breadcumb />
      <div className="overflow-hidden py-24 sm:py-32 bg-[color:var(--colorGris)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
            <div>
              <div className="w-[60rem]">
                <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorBlanco)] sm:text-4xl">Nuestros Servicios</p>
                <p className="mt-6 text-lg leading-8 text-[color:var(--colorBlanco)]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl text-base leading-7 text-[color:var(--colorBlanco)] lg:max-w-none flex">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-[color:var(--colorBlanco)]">
                        <feature.icon className="absolute left-1 h-5 w-5 text-[var(--colorPrincipal)]" aria-hidden="true" />
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
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0 lg:max-w-none flex items-center justify-center">
            <div>
              <div className="w-[60rem]">
                <p className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--colorGris)] sm:text-4xl">Visítanos En Nuestra Oficina</p>
                <div className='flex items-center my-8'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.6024177678537!2d-7.552206287870309!3d43.0077056938189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31ce8c09ec3391%3A0x8c15da6c6ce4749d!2sIngenier%C3%ADa%20Arza%20S.L.!5e0!3m2!1ses!2ses!4v1690831545740!5m2!1ses!2ses" width="600" height="300" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  <p className="mt-6 text-lg leading-8 text-[color:var(--colorGris)] mx-8">
                    Si tienes algún proyecto en mente o quieres realizarnos cualquier consulta, no dudes en ponerte en contacto con nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Inicio