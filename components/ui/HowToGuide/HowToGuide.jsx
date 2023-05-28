import s from "./HowToGuide.module.scss";

const HowToGuide = (props) => {
  const { children } = props;
  return (
    <div className={s["content-box"]}>
      <h2 className="secondary-heading">How To Guide</h2>
      {children}
    </div>
  );
};

export default HowToGuide;
