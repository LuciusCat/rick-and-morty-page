import CardCharacter from "../UI/CardCharacter";
import useFetchApi from "../../logic/useFetchApi";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  url: string;
  page: number;
}

export default function CharacterList({ url, page }: Props) {
  const api = { url: `${url}/character?page=${page}` };
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
