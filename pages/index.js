
import Header from './header';
import Footer from './footer';


const Home = () => {
    return (
        <div class="App">
            {/* Aqui renderiza o Header */}
            <Header />
            {/* Aqui renderiza a Home */}
            <section>
                <main>
                    Main Site
                    </main>
            </section>

            {/* Aqui renderiza o Footer */}
            <Footer />
        </div>
    );
}
export default Home; 