const EquipmentList = ({ equipments }) => {
  return (
    <>
      <h3>Equipments</h3>
      <ul className="!list-none flex justify-start space-x-5">
        {equipments &&
          equipments.map((equipment, index) => (
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

export default EquipmentList;
