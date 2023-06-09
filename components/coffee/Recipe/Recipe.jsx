import { CategoryLabel } from "@/components/coffee";
import Image from "next/image";
import s from "./Recipe.module.scss";
import Link from "next/link";

const Recipe = ({ recipe, slug, imgUrl, index }) => {
  const host = "https://res.cloudinary.com";
  return (
    <div className="bg-dark shadow-lg text-on-primary rounded-md">
      <div
        style={{ "--image-url": `url(${imgUrl})` }}
        className={`w-full h-[50vh] bg-primary-dk bg-[image:var(--image-url)] bg-cover bg-center rounded-lg`}
      >
        <div className="absolute inset-0 w-full h-full"></div>
      </div>
      {/* <Image
        src={imgUrl}
        width={400}
        height={300}
        alt={`${recipe.category}${index}`}
        className="rounded-md"
      /> */}
      <div className="px-6 py-3">
        <Link href={`/random-coffee-recipe-generator/${slug}`}>
          <h3 className="text-xl cursor-pointer">{recipe.title}</h3>
        </Link>
        <div className="font-light">{recipe.excerpt}</div>
        <Link href="/">
          <button className="px-5 py-3 bg-primary rounded-md text-on-primary-inverse cursor-pointer">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Recipe;
