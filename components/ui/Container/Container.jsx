const Container = (props) => {
  const { children, heading, description, author } = props;
  const formatedDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="content-wrapper">
      <h1 className="primary-heading">{heading}</h1>
      <div className="my-3 text-center opacity-60">{description}</div>
      <div className="my-3 flex items-center justify-center font-light space-x-10">
        <div>Author: {author}</div>
        <div>Date: {formatedDate}</div>
      </div>
      {children}
    </section>
  );
};

export default Container;
