import Link from "next/link";
import { BsFacebook } from "react-icons/bs";

const Facebook = ({ ...props }) => {
  const fillColor = props.fillColor ? props.fillColor : "var(--color-on-lt)";
  return (
    <Link href="https://www.facebook.com/wedreamofcoffee/">
      <BsFacebook fill={`${fillColor}`} className="text-xl" />
    </Link>
  );
};
export default Facebook;
