import s from "./Container.module.scss";
import { TopBar } from "@/components/ui";

const Container = (props) => {
  const { children, heading, description, author, date, readTime, topBar } =
    props;

  return (
    <section className="content-wrapper">
      <h1 className="primary-heading">{heading}</h1>
      {description && (
        <div className="my-5 text-center font-medium text-accent-dk opacity-80">
          {description}
        </div>
      )}

      {topBar && <TopBar author={author} date={date} readTime={readTime} />}

      <div className={s["main-content"]}>{children}</div>
    </section>
  );
};

export default Container;
