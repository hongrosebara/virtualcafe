const IngredientList = ({ ingredients }) => {
  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
    </>
  );
};

export default IngredientList;
