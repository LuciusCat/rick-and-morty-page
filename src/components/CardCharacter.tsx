interface Props {
  name: string;
  image: string;
}

export default function CardCharacter({ name, image }: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
