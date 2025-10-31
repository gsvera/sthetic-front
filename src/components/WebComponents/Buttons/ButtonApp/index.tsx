import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type buttonAppProps = {
  textBtn: string;
  href: string;
};
export const ButtonApp = ({ textBtn, href }: buttonAppProps) => {
  return (
    <div className="button-app">
      <Link href={href} className="link-show-app">
        <div className="btn-show-app">
          <div>
            {textBtn} <FiArrowRight className="ml-1" size={20} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonApp;
