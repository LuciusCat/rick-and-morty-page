import CardCharacter from "./CardCharacter";
import useFetchApi from "../logic/useFetchApi";

interface Character {
  id: number;
  name: string;
  image: string;
}

export default function CharacterList() {
  const api = { url: "https://rickandmortyapi.com/api/character" };
  const { data, loading, error } = useFetchApi<{ results: Character[] }>(api);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data?.results.map((character) => (
        <CardCharacter
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </>
  );
}
