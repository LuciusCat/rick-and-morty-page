import CharacterList from "./components/interface/CharacterList";
import NavBar from "./components/interface/NavBar";
import Button from "./components/UI/Button";
import { usePagination } from "./logic/usePagination";
import { linksFooter } from "./data/dataFooter";
import "./App.css";
import Footer from "./components/interface/Footer";
import "./css/home.css";
import { dataNavBar } from "./data/datNavBar";
import Article from "./components/UI/Article";
import { infoSerie } from "./data/dataMain";
import Title from "./components/UI/Title";
import headers from "./css/headers.module.css";
import Subtitle from "./components/UI/Subtitle";

const API_URL = "https://rickandmortyapi.com/api";

function App() {
  const { page, nextPage, prevPage } = usePagination();

  return (
    <section className="page">
      <main>
        <header>
          <Title className={headers.title}>Rick and Morty Fan Page</Title>
        </header>
        <nav>
          <NavBar data={dataNavBar} />
        </nav>
        <section className="body-main">
          <Article id="n1" />
          <Article id="n2" className="article-text">
            {infoSerie.infoSerie_1}
          </Article>
          <Article id="n3" className="article-text">
            {infoSerie.infoSerie_2}
          </Article>
          <Article id="n4" />
          <Article id="n5" className="article-text">
            {infoSerie.infoSerie_3}
          </Article>
          <Article id="n6" />
        </section>
      </main>

      <section className="characters" id="listCharacters">
        <Subtitle className={headers.subtitle}>Lista de personajes</Subtitle>
        <section className="button-container">
          <Button text="Página Anterior" onClick={prevPage} />
          <Button text="Siguiente Página" onClick={nextPage} />
        </section>

        <section className="character-list">
          <CharacterList url={API_URL} page={page} />
        </section>

        <section className="button-container">
          <Button text="Página Anterior" onClick={prevPage} />
          <Button text="Siguiente Página" onClick={nextPage} />
        </section>
      </section>
      <footer id="footer">
        <Footer autor="César Gutiérrez" data={linksFooter} />
      </footer>
    </section>
  );
}

export default App;
