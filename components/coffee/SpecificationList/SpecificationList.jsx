const SpecificationList = ({ heading, lists }) => {
  return (
    <>
      <h3>{heading}</h3>
      <ul className="!list-none flex flex-row justify-start items-center space-x-5">
        {lists &&
          lists.map((list, index) => (
            <li key={index} className="bg-primary-lt px-5 py-2 text-on-primary-inverse rounded-md">
              {list}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SpecificationList;
