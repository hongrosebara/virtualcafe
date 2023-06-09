import { CategoryLabel } from "@/components/coffee";
import Link from "next/link";

const Recipe = ({ recipe, slug, imgUrl, index }) => {
  return (
    <div className="bg-surface shadow-lg text-on-primary rounded-md">
      <div
        style={{ "--image-url": `url(${imgUrl})` }}
        className={`w-full h-[50vh] bg-primary-dk bg-[image:var(--image-url)] bg-cover bg-center rounded-lg`}
      ></div>
      {/* <Image
        src={imgUrl}
        width={400}
        height={300}
        alt={`${recipe.category}${index}`}
        className="rounded-md"
      /> */}
      <div className="px-10 py-5">
        <Link href={`/random-coffee-recipe-generator/${slug}`}>
          <h3 className="mt-5 text-xl cursor-pointer">{recipe.title}</h3>
        </Link>
        <div className="my-10 font-light">{recipe.excerpt.slice(0, 100)}...</div>
        <Link href={`/random-coffee-recipe-generator/${slug}`}>
          <button className="px-5 py-3 bg-primary-dk hover:bg-primary rounded-md text-on-primary-inverse cursor-pointer">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Recipe;
