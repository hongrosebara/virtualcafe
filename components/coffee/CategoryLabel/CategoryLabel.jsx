import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colorKey = {
    iced: "primary",
    hot: "secondary",
  };

  return (
    <div className={`bg-${colorKey[children]}`}>
      <Link href={`/recipes/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  );
};

export default CategoryLabel;
