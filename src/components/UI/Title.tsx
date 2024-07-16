import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

const Title = ({ className, children }: Props) => {
  return <h1 className={className}>{children}</h1>;
};

export default Title;
