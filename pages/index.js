
import Header from './header';
import Footer from './footer';
const Home = () => {
    return (

        <div className="App">
            {/* Aqui renderiza o Header */}
            {/* <Header /> */}
            {/* Aqui renderiza a Home */}
            <section>
                <main className="main-banner">
                    <div className="icon">
                        <img className="icon-img" />
                    </div>
                    <div className="principal">
                        <div className="name">
                            Pedro
                        </div>
                        <div className="name">
                            Tomaz
                        </div>
                    </div>

                    <div className="secundario">
                        <div className="text">
                            Programador
                    </div>
                    </div>
                </main>
            </section>

            {/* Aqui renderiza o Footer */}
            {/* <Footer /> */}
        </div >
    );
}
export default Home; 