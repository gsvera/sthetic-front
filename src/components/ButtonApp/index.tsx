import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type buttonAppProps = {
  textBtn: string;
  href: string;
};
export const ButtonApp = ({ textBtn, href }: buttonAppProps) => {
  return (
    <Link href={href} className="btn-show-app">
      {textBtn} <FiArrowRight className="ml-1" size={20} />
    </Link>
  );
};

export default ButtonApp;
