import logo from "../assets/Logo Transparente.png"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    BanknotesIcon,
    DocumentTextIcon,
    CubeTransparentIcon,
    BriefcaseIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Subvenciones', description: 'Consulta la información sobre nuestros métodos de transporte.', href: '/transporte', icon: BanknotesIcon },
    { name: 'Asesoría', description: 'Échale un vistazo a nuestra flota de transporte.', href: '/flota', icon: DocumentTextIcon },
    { name: 'Proyectos', description: 'Cuidamos nuestra calidad y queremos demostrarlo.', href: '/calidad', icon: CubeTransparentIcon },
    { name: 'Otros Servicios', description: 'Cuidamos nuestra calidad y queremos demostrarlo.', href: '/calidad', icon: BriefcaseIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[color:var(--colorGris)]">
            <nav className="mx-auto flex max-w-[110rem] items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    {/* <div className="flex flex-col items-center justify-center font-medium text-[color:var(--colorBlanco)] pr-5">
                        <h1 className="text-l">Grupo Transportes</h1>
                        <h1 className="font-semibold text-xl">Zas</h1>
                    </div> */}

                    <div>
                        <a href={"/"} className="-m-1.5 p-1.5 flex">
                            <img className="h-12 w-auto pr-1" src={logo} alt="Logo" />
                        </a>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[color:var(--colorBlanco)]"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12 font-medium text-[color:var(--colorBlanco)]">
                    <a href="/" className="leading-6 transicionColor">
                        Inicio
                    </a>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 leading-6 transicionColor">
                            Servicios
                            <ChevronDownIcon className="h-5 w-5 flex-none text-[color:var(--colorBlanco)]" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-[15rem] top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-[color:var(--colorBlanco)]">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[color:var(--colorPrincipal)] transiciones" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href="/contacto" className="leading-6 transicionColor">
                        Contacto
                    </a>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Grupo Transportes Zas</span>
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y font-semibold text-[color:var(--colorGris)] divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/inicio"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50 transicionColorMovil"
                                >
                                    Inicio
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 hover:bg-gray-50 transicionColorMovil">
                                                Empresa
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 hover:bg-gray-50 transicionColorMovil transicionColorMovil"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/galeria"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50 transicionColorMovil"
                                >
                                    Galería
                                </a>
                                <a
                                    href="/contacto"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50 transicionColorMovil"
                                >
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header
