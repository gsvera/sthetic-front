import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type buttonKnowMoreProps = {
  href: string;
  textBtn: string;
  styles?: string;
};

export const ButtonKnowMore = ({
  href,
  textBtn,
  styles,
}: buttonKnowMoreProps) => {
  return (
    <Link className={`btn-know-more ${styles}`} href={href}>
      <div className="content-center-xy">
        {textBtn} <FiArrowRight className="ml-1" size={20} />
      </div>
    </Link>
  );
};

export default ButtonKnowMore;
