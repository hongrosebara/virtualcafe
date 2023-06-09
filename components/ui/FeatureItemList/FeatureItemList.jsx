import Image from "next/image";
import { FeatureItem } from "@/components/ui";
import { useState } from "react";
import s from "./FeatureItemList.module.scss";

const FeatureItemList = ({ heading, featureItems }) => {
  const [items] = useState(featureItems);

  return (
    <section className={s["feature-content"]}>
      <h2>{heading}</h2>
      <div className={s["content-box"]}>
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
        </div>
    </section>
  );
};
export default FeatureItemList;
