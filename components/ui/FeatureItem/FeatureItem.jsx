import Image from "next/image";
import Link from "next/link";
import s from "./FeatureItem.module.scss";

const FeatureItem = (props) => {
  const { children, heading, imgUrl, subheading, description, cta, slug } =
    props;

  return (
    <div className="md:px-40 py-20 mx-auto max-w-8xl flex flex-col items-center justify-between md:gap-20">
      <Image
        src={imgUrl}
        width={500}
        height={300}
        alt={heading}
        className="rounded-md"
      />

      <div className={s["text-box"]}>
        <h2 className="mt-10 md:mt-0">{heading}</h2>
        <p className="my-5 text-on-primary">{description}</p>
        <Link href={slug}>
          <button className="bg-primary-dk text-on-primary-inverse px-10 py-5 shadow-sm rounded-md hover:bg-primary">
            {cta}
          </button>
        </Link>
      </div>

      {children}
    </div>
  );
};
export default FeatureItem;
