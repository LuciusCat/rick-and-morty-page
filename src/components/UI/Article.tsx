import { ReactNode } from "react";

interface Props {
  className?: string;
  id: string;
  children?: ReactNode;
}

const Article = ({ className, id, children }: Props) => {
  return (
    <article className={className} id={id}>
      <p>{children}</p>
    </article>
  );
};

export default Article;
