import Link from "next/link";
import { BsPinterest } from "react-icons/bs";

const Pinterest = ({ ...props }) => {
  const fillColor = props.fillColor ? props.fillColor : "var(--color-on-lt)";
  return (
    <Link href="https://www.pinterest.com/wedreamofcoffee/">
      <BsPinterest fill={`${fillColor}`} className="text-xl"/>
    </Link>
  );
};

export default Pinterest;
