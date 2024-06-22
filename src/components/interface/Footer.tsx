import "../../css/footer.css";
interface DataProps {
  link: string;
  text: string;
}

interface Props {
  data: DataProps[];
  autor: string;
}

const Footer: React.FC<Props> = ({ data, autor }) => {
  return (
    <>
      <h3 className="autor-footer">Creado por {autor}</h3>
      <p className="description-autor">"Desarrollador front-end"</p>

      <ul className="ul-footer">
        {data.map(({ link, text }, index) => (
          <li className="li-footer" key={index}>
            <a target="_blank" href={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-footer">
        Descargo de responsabilidad: este sitio web no está afiliado ni
        respaldado por Adult Swim, Rick and Morty, o sus creadores.
      </p>
    </>
  );
};

export default Footer;
