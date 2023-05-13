import Header from '../componentes/Header'
// import Footer from '../componentes/Footer'

function MainLayout({children}) {
    return (
        <>
            <Header></Header>
            <div>{children}</div>
            {/* <Footer></Footer> */}
        </>
    )
}

export default MainLayout