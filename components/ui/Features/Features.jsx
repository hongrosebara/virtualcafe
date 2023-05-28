import Image from "next/image";
import { FeatureItem } from "@/components/ui";
import { useState } from "react";
import s from "./Features.module.scss";

const Features = ({ featureItems }) => {
  const [items] = useState(featureItems);

  return (
    <section className={s["feature-content"]}>
      {items &&
        items.map((item) => (
          <FeatureItem
            key={item.id}
            heading={item.heading}
            subheading={item.subheading}
            imgUrl={item.imgUrl}
            description={item.description}
            cta={item.cta}
            slug={item.slug}
          >
          </FeatureItem>
        ))}
    </section>
  );
};
export default Features;
