const HamburgerIcon = ({ ...props }) => {
  const fillColor = props.fillColor ? props.fillColor : "#fff";
  return (
    <div className="p-1/2">
      <svg
        fill={`${fillColor}`}
        className="w-8 h-8 text-gray-500"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );
};

export default HamburgerIcon;
