const FeatureItem = (props) => {
  const {
    children,
    heading,
    imgUrl,
    subheading,
    description,
    cta,
    slug,
  } = props;
  return (
    <div>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <div>{description}</div>
      <button>{cta}</button>

      {children}
    </div>
  );
};
export default FeatureItem;
