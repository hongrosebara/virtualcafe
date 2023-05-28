import s from "./Container.module.scss";

const Container = (props) => {
  const { children, heading, description, author, date } = props;

  return (
    <section className="content-wrapper">
      <h1 className="primary-heading">{heading}</h1>
      {description && (
        <div className="my-3 text-center font-medium text-accent-dk opacity-60">{description}</div>
      )}
      <div className="my-3 flex items-center justify-center font-light space-x-10">
        {author && <div> Author: {author}</div>}
        {date && <div>{date}</div>}
      </div>
      <div className={s["main-content"]}>{children}</div>
    </section>
  );
};

export default Container;
