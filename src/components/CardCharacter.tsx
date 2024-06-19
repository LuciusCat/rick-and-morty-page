import "../css/cardCharacter.css";
interface Props {
  name: string;
  image: string;
}

export default function CardCharacter({ name, image }: Props) {
  return (
    <article className="card-character">
      <img className="img-card-character" src={image} alt={name} />

      <h2 className="title-card-character">{name}</h2>
    </article>
  );
}
