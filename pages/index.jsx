import Image from "next/image";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { Layout } from "@/components/common";
import { Hero } from "@/components/ui";

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="We Dream Of Coffee"
        description="Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe."
        canonical="https://www.wedreamofcoffee.com/"
        openGraph={{
          url: "https://www.facebook.com/wedreamofcoffee",
          title: "We Dream Of Coffee",
          description:
            "Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe.",
          images: [
            {
              url: "https://www.wedreamofcoffee.com/seo/Open Graph.png",
              width: 1200,
              height: 627,
              alt: "facebook opengraph",
              type: "image/png",
            },
            {
              url: "https://www.wedreamofcoffee.com/seo/Twitter Card.png",
              width: 800,
              height: 418,
              alt: "twitter card",
              type: "image/png",
            },
            { url: "https://www.wedreamofcoffee.com/logo.png" },
            { url: "https://www.wedreamofcoffee.com/coffeeshop.svg" },
          ],
          siteName: "We Dream Of Coffee",
        }}
        twitter={{
          handle: "@wedreamofcoffee",
          site: "@wedreamofcoffee ",
          cardType: "summary_large_image",
        }}
      />

      <ArticleJsonLd
        url="https://www.wedreamofcoffee.com"
        title="Virtual Cafe Progressive Web App"
        images={[
          "https://www.wedreamofcoffee.com/logo.png",
          "https://www.wedreamofcoffee.com/coffeeshop.svg",
        ]}
        datePublished="2022-02-05T08:00:00+08:00"
        dateModified="2022-10-05T09:00:00+08:00"
        authorName={[
          {
            name: "Olivia Gilliand",
            url: "https://www.wedreamofcoffee.com/#oliviagilliand",
          },
        ]}
        publisherName="We Dream Of Coffee"
        publisherLogo="https://www.wedreamofcoffee.com/logo.png"
        description="Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe."
        isAccessibleForFree={true}
      />

      <section>
        <Hero />
      </section>

      <section className="section-wrapper">
        <h1>Coffee Festival Events</h1>
      </section>

      <section className="mx-auto bg-primary-dark text-white">
        <h1>Famous Coffee Roasters</h1>
      </section>

      <section className="section-wrapper">
        <h1>Coffee Subscriptions</h1>
      </section>
    </>
  );
};

export default HomePage;

HomePage.Layout = Layout;
