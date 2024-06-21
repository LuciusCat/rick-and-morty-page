import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";
import Button from "./components/interface/Button";
import { usePagination } from "./logic/usePagination";
import { linksFooter } from "./data/dataFooter";
import "./App.css";
import Footer from "./components/Footer";

const dataNavBar = [
  { link: "#", text: "Inicio" },
  { link: "#", text: "Personajes" },
  { link: "#", text: "Capitulos" },
];

const API_URL = "https://rickandmortyapi.com/api";

function App() {
  const { page, nextPage, prevPage } = usePagination();

  return (
    <section className="page">
      <header>
        <nav>
          <NavBar data={dataNavBar} />
        </nav>
      </header>
      <main>
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
      </main>
      <footer>
        <Footer autor="César Gutiérrez" data={linksFooter} />
      </footer>
    </section>
  );
}

export default App;
