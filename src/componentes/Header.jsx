function Header() {
    return (
        <header className="headerMain shadow-2xl">
            <div className="flex flex-col justify-center bg-[var(--colorPrincipal)] py-3 md:flex-row md:justify-around">
                <div className="flex justify-center md:justify-around">
                    <a href="#"><i className="fa-brands fa-facebook-f text-[1.2rem] font-bold text-[var(--colorBlanco)] hover:text-[var(--colorGris)] transition-all"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube text-[1.2rem] font-bold text-[var(--colorBlanco)] hover:text-[var(--colorGris)] transition-all"></i></a>
                </div>
                <div className="flex justify-center md:justify-around">
                    <a href="#" className="text-[1rem] text-[var(--colorBlanco)] hover:text-[var(--colorGris)] transition-all"><i className="fa-solid fa-phone"></i>+34 982 20 14 28 </a>
                    <a href="#" className="text-[1rem] text-[var(--colorBlanco)] hover:text-[var(--colorGris)] transition-all"><i className="fa-solid fa-envelope"></i>info.arza@iarza.com </a>
                    <a href="#" className="text-[1rem] text-[var(--colorBlanco)] hover:text-[var(--colorGris)] transition-all"><i className="fa-solid fa-location-dot"></i>Lugo, Galicia</a>
                </div>
            </div>
            <div className="flex flex-col justify-center mx-[5rem] py-4 md:justify-between md:flex-row">
                <div className="flex justify-center md:justify-around">
                    <a href="#">Logo</a>
                    <a href="#">Segundo Logo</a>
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
