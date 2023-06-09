import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colorKey = {
    iced: "primary",
    hot: "secondary",
  };

  return (
    <div className={`flex justify-start py-4 text-on-primary bg-${colorKey[children]}`}>
      <Link href={`/recipes/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  );
};

export default CategoryLabel;
