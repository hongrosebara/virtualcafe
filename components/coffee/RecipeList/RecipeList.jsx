import { Recipe } from "@/components/coffee";

const RecipeList = ({ heading, recipes }) => {
  return (
    <section className="">
      <h2 className="padding-primary">{ heading} </h2>
      <div className="flex flex-col md:flex-row items-start justify-start gap-10">
        {recipes &&
          recipes.map(
            (recipe, index) =>
              recipe.frontmatter.draft && (
                <Recipe
                  key={index}
                  slug={recipe.slug}
                  imgUrl={recipe.frontmatter.cover_image}
                  recipe={recipe.frontmatter}
                />
              )
          )}
      </div>
    </section>
  );
};

export default RecipeList;
