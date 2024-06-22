import "../../css/navBar.css";
interface Data {
  link: string;
  text: string;
}

interface Props {
  data: Data[];
}

export default function NavBar({ data }: Props) {
  return (
    <ul className="ul-nav-bar">
      {data.map(({ link, text }, index) => (
        <li className="li-nav-bar" key={index}>
          <a className="link-nav-bar" href={link}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}
