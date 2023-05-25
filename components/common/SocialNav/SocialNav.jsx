import { Facebook, Instagram, Twitter } from "@/components/icons";

const SocialNav = ({ fillColor }) => {
  return (
    <div className="flex items-center justify-end space-x-4 text-accent-lt">
      <Facebook fillColor={`${fillColor}`} />
      <Instagram fillColor={`${fillColor}`} />
      <Twitter fillColor={`${fillColor}`} />
    </div>
  );
};
export default SocialNav;
