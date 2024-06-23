import CharacterList from "./components/CharacterList";
import NavBar from "./components/interface/NavBar";
import Button from "./components/Button";
import { usePagination } from "./logic/usePagination";
import { linksFooter } from "./data/dataFooter";
import "./App.css";
import Footer from "./components/interface/Footer";
import "./css/home.css";
import portal from "./assets/image/portal.jpeg";

import sunset from "./assets/image/atardecer-espacial.jpeg";

const dataNavBar = [
  { link: "#", text: "Inicio" },
  { link: "#", text: "Personajes" },
  { link: "#", text: "Acerca de" },
];

const API_URL = "https://rickandmortyapi.com/api";

function App() {
  const { page, nextPage, prevPage } = usePagination();

  return (
    <section className="page">
      <main>
        <header>
          <h1>Rick and Morty</h1>
          <h2>Fan Page</h2>
        </header>
        <nav>
          <NavBar data={dataNavBar} />
        </nav>
        <section className="body-main">
          <article id="n1"></article>
          <article id="n2" className="article-text">
            <p>
              "Rick and Morty" es una serie de televisión animada creada por
              Justin Roiland y Dan Harmon, que se estrenó en Adult Swim el 2 de
              diciembre de 2013. La serie se centra en las alocadas y peligrosas
              aventuras interdimensionales de Rick Sanchez, un científico
              alcohólico y extremadamente inteligente, y su nieto Morty Smith,
              un adolescente inseguro y de buen corazón.
            </p>
          </article>
          <article id="n3" className="article-text">
            <p>
              Es conocida por su humor negro, sátira de la ciencia ficción, y
              exploración de temas filosóficos y existenciales. Cada episodio
              mezcla situaciones cómicas con reflexiones profundas sobre la
              naturaleza humana, el universo y la realidad. Los elementos de
              ciencia ficción permiten a los creadores abordar una amplia
              variedad de historias, desde viajes en el tiempo hasta universos
              paralelos, manteniendo siempre un enfoque irreverente y
              provocador.
            </p>
          </article>
          <article id="n4"></article>
          <article id="n5" className="article-text">
            <p>
              La serie ha ganado una gran popularidad y cuenta con una base de
              seguidores muy dedicada. Ha sido elogiada por su creatividad,
              humor y la profundidad de sus historias, aunque también ha sido
              objeto de controversia debido a su contenido explícito y a veces
              perturbador.
            </p>
          </article>
          <article id="n6"></article>
        </section>
      </main>

      <section className="characters">
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
      <footer>
        <Footer autor="César Gutiérrez" data={linksFooter} />
      </footer>
    </section>
  );
}

export default App;
