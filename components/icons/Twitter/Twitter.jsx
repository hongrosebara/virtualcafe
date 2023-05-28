import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const Twitter = ({ ...props }) => {
  const fillColor = props.fillColor ? props.fillColor : "var(--color-on-lt)";
  return (
    <Link href="https://www.twitter.com/wedreamofcoffee/">
      <BsTwitter fill={`${fillColor}`} className="text-xl" />
    </Link>
  );
};

export default Twitter;
