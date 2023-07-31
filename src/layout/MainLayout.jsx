import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

function MainLayout({children}) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default MainLayout