import Image from "next/image";
import { FeatureItem } from "@/components/ui";
import { useState } from "react";

const Features = ({ featureItems }) => {
  const [items] = useState(featureItems);
  console.log('items',items)

  return (
    <section>
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
            <h1>Coffee Subscription Boxes</h1>
          </FeatureItem>
        ))}
    </section>
  );
};
export default Features;
