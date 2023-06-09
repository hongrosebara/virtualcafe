import { Recipe } from "@/components/coffee";

const RecipeList = ({ recipes }) => {
  return (
    <div className="my-10 md:my-20 flex flex-col md:flex-row items-start justify-start gap-10">
      {recipes &&
        recipes.map(
          (recipe, index) =>
            recipe.frontmatter.draft && (
              <Recipe
                key={index}
                index={index + 1}
                slug={recipe.slug}
                imgUrl={recipe.frontmatter.cover_image}
                recipe={recipe.frontmatter}
              />
            )
        )}
    </div>
  );
};

export default RecipeList;
