import { Recipe } from "@/components/coffee";

const RecipeList = ({ recipes }) => {
  return (
    <div className="my-10 md:my-20 flex flex-col items-start justify-start gap-10">
      {recipes &&
        recipes.map((recipe, index) => (
          <Recipe
            key={index}
            index={index + 1}
            imgUrl={recipe.imgUrl}
            recipe={recipe.frontmatter}
          />
        ))}
    </div>
  );
};

export default RecipeList;
