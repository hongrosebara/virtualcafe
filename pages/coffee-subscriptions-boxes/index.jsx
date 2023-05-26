import {
  markdownWithMeta,
  buildPathsForPosts,
  extractFolder,
} from "@/components/utils/getData";
import { Layout } from "@/components/common";
import matter from "gray-matter";
import { Box } from "@/components/coffee";
import { getListOfCoffeeSubscriptionBoxPhotos } from "@/lib/coffee-roaster";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { SEO } from "@/components/common";

export async function getStaticProps() {
  // Get photos from Unsplash
  const photos = await getListOfCoffeeSubscriptionBoxPhotos();
  // Generate markdown posts
  const postPath = buildPathsForPosts("coffee-subscription-boxes");
  const posts = extractFolder(postPath).map((post, index) => {
    const slug = post.replace(".md", "");
    const content = markdownWithMeta(postPath, post);
    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter,
      imgUrl: photos.length > 0 ? photos[index] : null,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const CoffeeSubscriptionBoxes = ({ posts }) => {
  const { asPath } = useRouter();

  const meta = {
    title: "Top 10 Best Coffee Subscription Boxes You Have To Try",
    canonicalURL: "www.wedreamofcoffee.com" + asPath,
    keywords: ["coffee subscription boxes"],
    description:
      "Explore our curated selection of the top 10 best coffee subscription boxes. Discover a world of exceptional flavors, convenience, and monthly coffee delights delivered to your doorstep.",
    datePublished: "2022-06-21T23:04:13Z",
    socialImageURL: "www.wedreamofcoffee.com/assets/home/desktop/image-hero-coffeepress.jpg",
  };

  return (
    <>
      <SEO
        title={`${meta.title} - We Dream Of Coffee`}
        description={meta.description}
        canonical={meta.canonicalURL}
        image={meta.socialImageURL}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context":"https://schema.org",
              "@graph":
              [{
                  "@type": "Organization",
                  "@id": https://www.wedreamofcoffee.com + "/#organization",
                  "name": "We Dream Of Coffee",
                  "url": https://www.wedreamofcoffee.com,
                  "sameAs":[
                    'https://www.facebook.com/WeDreamOfCoffeeshop/',
                    'https://twitter.com/realWeDreamOfCoffee',
                    'https://www.pinterest.com/WeDreamOfCoffee/'],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": https://www.wedreamofcoffee.com + "/#logo",
                    "inLanguage": "en-US",
                    "url": this.logo,
                    "contentUrl": this.logo,
                    "width": 500,
                    "height": 500,
                    "caption": "WeDreamOfCoffee"
                    },
                  "image": {"@id": https://www.wedreamofcoffee.com + "/#logo"},
                  "founder": {
                    "@type": "Person",
                    "name": "Hong Le",
                    "url": https://www.wedreamofcoffee.com + "#about-us",
                    "sameAs": https://www.wedreamofcoffee.com + "/about-us"},
                  "foundingDate": "2018-05-02",
                  "numberOfEmployees": 5,
                  "slogan": "Unveiling the Essence of Coffee: Roasters, Festivals, Subscriptions, and More!",
                  "description": ${meta.description},
                  "legalName": "WeDreamOfCoffee",
                  'address': {
                    '@type': "PostalAddress",
                    'addressLocality': "South San Francisco", 
                    'addressRegion': "CA", 
                    'postalCode': '94080', 
                    'streetAddress': '940 Mission Rd'}
                },
                {
                  "@type": "WebSite",
                  "@id": https://www.wedreamofcoffee.com + "/#website",
                  "url": https://www.wedreamofcoffee.com,
                  "name": "WeDreamOfCoffee",
                  "description": "Unveiling the Essence of Coffee: Roasters, Festivals, Subscriptions, and More!",
                  "publisher":{
                    "@id": https://www.wedreamofcoffee.com + "/#organization"},
                    "potentialAction":[{
                      "@type":"SearchAction",
                      "target":{
                        "@type": "EntryPoint",
                        "urlTemplate": https://www.wedreamofcoffee.com + "/?s={search_term_string}"},
                      "query-input": "required name=search_term_string"}],
                    "inLanguage": "en-US",
                    "copyrightHolder": {"@id": https://www.wedreamofcoffee.com + "/#organization"}
                },
                {
                  "@type": "ImageObject",
                  "@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#primaryimage",
                  "inLanguage": "en-US",
                  "url": ${meta.socialImageURL}
                  "contentUrl": ${meta.socialImageURL}
                  "width": 1200,
                  "height": 627
                },
                {
                  "@type": "WebPage",
                  "@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#webpage",
                  "url": https://www.wedreamofcoffee.com + ${meta.canonicalURL},
                  "name": ${meta.title},
                  "isPartOf": {"@id": https://www.wedreamofcoffee.com + "/#website"},
                  "primaryImageOfPage": {"@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#primaryimage"},
                  "datePublished": "2017-08-19T12:00:37+00:00",
                  "dateModified": ${new Date().toLocaleString()},
                  "description": ${meta.description},
                  "breadcrumb": {"@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#breadcrumb"},
                  "inLanguage": "en-US",
                  "potentialAction":[{
                    "@type": "ReadAction",
                    "target": [https://www.wedreamofcoffee.com + ${meta.canonicalURL}]}]
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#breadcrumb",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": https://www.wedreamofcoffee.com
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Coffee Subscription Boxes",
                    "item": https://www.wedreamofcoffee.com + ${meta.canonicalURL}
                  },]
                },
                {
                  "@type": "Article",
                  "@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#article",
                  "isPartOf": {"@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#webpage"}, 
                  "author": {"@id": https://www.wedreamofcoffee.com + "/#/schema/person/1"},
                  "headline": this.headline,
                  "datePublished": "2020-08-19T12:00:37+00:00",
                  "dateModified": new Date().toLocaleString(),
                  "mainEntityOfPage": {"@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#webpage"},
                  "wordCount": 3999,
                  "commentCount": 6,
                  "publisher": {"@id": https://www.wedreamofcoffee.com + "#organization"},
                  "image": {"@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#primaryimage"},
                  "thumbnailUrl": ${meta.socialImageURL}
                  "keywords": this.keywords,
                  "inLanguage": "en-US",
                  "potentialAction": [{
                    "@type": "CommentAction",
                    "name": "Comment",
                    "target": [https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#respond"]}],
                  "copyrightYear": "2020",
                  "copyrightHolder": {"@id": https://www.wedreamofcoffee.com + "#organization"}
                },
                {
                  "@type": "FAQPage",
                  "@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#faq-block",
                  "isPartOf": {"@id": https://www.wedreamofcoffee.com + ${meta.canonicalURL} + "#webpage"},
                  "author": {"@id": https://www.wedreamofcoffee.com + "/#/schema/person/1"},
                  "mainEntity": [{
                    "@type": "Question",
                    "name": "Why get a coffee subscription?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>With a coffee subscription, you can enjoy the convenience of having freshly roasted coffee delivered to your doorstep on a regular basis. You don't have to worry about running out of coffee or making trips to the store. It saves you time and ensures a consistent supply of your favorite brew.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "What is a coffee subscription service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A coffee subscription service is a convenient and personalized way to have freshly roasted coffee delivered to your doorstep on a recurring basis. It typically involves signing up for a subscription plan with a coffee provider or roaster, who will then curate and send you a selection of coffees based on your preferences."
                    }
                  }, {
                    "@type": "Question",
                    "name": "How Can You Find Creative Gifts for Artists in Your Life?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Here are some of our favorite <a href='/33-perfect-gifts-artists-love-paint-draw'>creative gifts for artists</a> to get the creative juices going: <br>Paint- by-numbers kits are a classic gift for artists who enjoy creating their own masterpieces. These kits come with everything you need to paint a picture, including paints, brushes, canvases, easels, frames, and more. Some kits include step-by-step instructions to help guide you through the process, while others offer blank canvas options so you can let your creativity run wild.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "Why do people pay for expensive coffee?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Expensive coffee often represents higher quality and superior flavor profiles. Specialty coffee beans are carefully sourced, meticulously roasted, and crafted to bring out the unique characteristics of each origin. These coffees tend to offer complex flavor profiles, distinct tasting notes, and exceptional taste experiences that coffee lovers appreciate and are willing to pay for.</p>"
                    }
                  }, ]
                },
                {
                  "@type":"Person",
                  "@id": https://www.wedreamofcoffee.com + "/#/schema/person/1",
                  "name": "Hong Le",
                  "image": {
                    "@type":"ImageObject",
                    "@id": https://www.wedreamofcoffee.com + "/#personlogo",
                    "inLanguage": "en-US",
                    "url": "https://secure.gravatar.com/avatar/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                    "contentUrl": "https://secure.gravatar.com/avatar/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                    "caption": "Hong Le"
                    },
                  "description": "Hong Le is the creative marketing manager at WeDreamOfCoffee. She loves building coffee applications that excite you",
                  "sameAs":[
                    https://www.wedreamofcoffee.com,
                    'https://www.facebook.com/hongle/',
                    'https://twitter.com/hongle',
                    'https://www.pinterest.com/hongle/',],
                    "url": https://www.wedreamofcoffee.com + "/#about-us/team/hong-le/"
                }
              ]},
              }`,
          }}
        ></script>
      </SEO>

      <section className="content-wrapper">
        <h1 className="primary-heading">Coffee Subscription Boxes</h1>
        <div className="my-3 text-center">
          Elevate your coffee experience with our selection of carefully curated
          coffee subscription boxes.
        </div>
        <div className="my-20 flex flex-col items-start justify-start gap-4">
          {posts &&
            posts.map((post, index) => (
              <Box
                key={index}
                index={index + 1}
                imgUrl={post.imgUrl}
                box={post.frontmatter}
              />
            ))}
        </div>
      </section>
    </>
  );
};
export default CoffeeSubscriptionBoxes;

CoffeeSubscriptionBoxes.Layout = Layout;
