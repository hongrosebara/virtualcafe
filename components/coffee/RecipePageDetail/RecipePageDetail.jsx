import Image from "next/image";

const RecipePage = ({ imgUrl, excerpt }) => {
  return (<div>
    <Image src={imgUrl} alt="hi" width={800} height={400} />
    <div>{excerpt}</div>
  </div>);
};
export default RecipePage;
