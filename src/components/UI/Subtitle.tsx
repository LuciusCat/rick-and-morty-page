import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

const Subtitle = ({ className, children }: Props) => {
  return <h2 className={className}>{children}</h2>;
};

export default Subtitle;
