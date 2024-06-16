import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
    <section className="page">
      <header>
        <nav></nav>
      </header>
      <main>
        <section className="character-list">
          <CharacterList />;
        </section>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;
