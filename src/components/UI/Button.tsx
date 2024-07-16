import "../../css/button.css";
interface Props {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}
