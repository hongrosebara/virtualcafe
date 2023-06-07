import { CategoryLabel } from "@/components/coffee";
import Image from "next/image";
import Link from "next/link";

const Recipe = ({ recipe, slug, imgUrl, index }) => {

  return (
    <div className="bg-surface shadow-sm px-8 py-6 text-on-primary rounded-md">
      <Image
        src={imgUrl}
        width={400}
        height={200}
        alt={`${recipe.category}${index}`}
      />
      <Link href={`/random-coffee-recipe-generator/${slug}`}>
        <h2 className="text-xl cursor-pointer">{recipe.title}</h2>
      </Link>
      <CategoryLabel>{recipe.category}</CategoryLabel>
      <div className="font-light">{recipe.excerpt}</div>
    </div>
  );
};
export default Recipe;
