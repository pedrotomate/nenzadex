
import Header from './header';
import Footer from './footer';
const Home = () => {
    return (

        <div className="App">
            {/* Aqui renderiza o Header */}
            {/* <Header /> */}
            {/* Aqui renderiza a Home */}

            <div className="menu-mobile">
                <div className="cabecalho">
                    <div className="menu-button">
                        <button class="menu hamburger hamburger--spin" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div className="title">
                        PEDRO TOMAZ
                    </div>
                </div>
                <nav className="menu-nav">
                    <div className="item">
                        <a href="#">
                            Sobre
                            </a>
                    </div>

                    <div className="item">
                        <a href="#">
                            Formação
                            </a>
                    </div>

                    <div className="item center">
                        <a href="#">
                            Skills
                            </a>
                    </div>

                    <div className="item">
                        <a href="#">
                            Portifólio
                            </a>
                    </div>

                    <div className="item">
                        <a href="#">
                            Contato
                            </a>
                    </div>
                </nav>
            </div>
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
                            DEV
                    </div>
                    </div>
                </main>
                <main className="content-home">
                    <nav className="menu-nav">
                        <div className="item">
                            <a href="#">
                                Sobre
                            </a>
                        </div>

                        <div className="item">
                            <a href="#">
                                Formação
                            </a>
                        </div>

                        <div className="item center">
                            <a href="#">
                                Skills
                            </a>
                        </div>

                        <div className="item">
                            <a href="#">
                                Portifólio
                            </a>
                        </div>

                        <div className="item">
                            <a href="#">
                                Contato
                            </a>
                        </div>
                    </nav>
                </main>
            </section>

            {/* Aqui renderiza o Footer */}
            {/* <Footer /> */}
        </div >
    );
}
export default Home; 