import { Facebook, Instagram, Twitter } from "@/components/icons";
import s from "./SocialNav.module.scss";

const SocialNav = ({ fillColor }) => {
  return (
    <div className={s["social-nav"]}>
      <div className="flex items-center justify-end space-x-4 cursor-pointer">
        <Facebook fillColor={`${fillColor}`} />
        <Instagram fillColor={`${fillColor}`} />
        <Twitter fillColor={`${fillColor}`} />
      </div>
    </div>
  );
};
export default SocialNav;
