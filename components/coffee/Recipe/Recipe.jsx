const Recipe = ({ recipe, imgUrl, index }) => {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <div>{recipe.excerpt}</div>
    </div>
  );
};
export default Recipe;
