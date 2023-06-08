const CoffeeTypes = ({ coffee_types }) => {
  return (
    <>
      <h3>coffee_types</h3>
      <ul className="!list-none flex justify-start space-x-5">
        {coffee_types &&
          coffee_types.map((equipment, index) => (
            <li
              key={index}
              className="bg-primary-lt px-5 py-2 text-on-primary-inverse rounded-sm"
            >
              {equipment}
            </li>
          ))}
      </ul>
    </>
  );
};

export default CoffeeTypes;
