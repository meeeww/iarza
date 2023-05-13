function Header() {
    return (
        <header>
            <div className="flex flex-col justify-center bg-[var(--colorPrincipal)] py-3 md:flex-row md:justify-around">
                <div className="flex justify-center md:justify-around">
                    <h2>Facebook</h2>
                    <h2>YouTube</h2>
                </div>
                <div className="flex justify-center md:justify-around">
                    <h2>Telefono</h2>
                    <h2>Correo</h2>
                    <h2>Localidad</h2>
                </div>
            </div>
            <div className="flex flex-col justify-center mx-[5rem] py-4 md:justify-between md:flex-row">
                <div className="flex justify-center md:justify-around">
                    <h1>Logo</h1>
                    <h1>Segundo Logo</h1>
                </div>
                <div className="flex justify-center md:justify-around">
                    <h2>Principal</h2>
                    <h2>Servicios</h2>
                    <h2>Noticias</h2>
                    <h2>Castellano</h2>
                    <h2>Contacto</h2>
                </div>
            </div>
        </header>
    )
}

export default Header
