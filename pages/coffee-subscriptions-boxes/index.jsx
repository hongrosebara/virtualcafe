import {
  markdownWithMeta,
  buildPathsForPosts,
  extractFolder,
} from "@/components/utils/getData";
import { Layout } from "@/components/common";
import matter from "gray-matter";
import { Box } from "@/components/coffee";
import { getListOfCoffeeSubscriptionBoxPhotos } from "@/lib/coffee-roaster";
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
  console.log(asPath);

  const meta = {
    title: "Top 10 Best Coffee Subscription Boxes You Have To Try",
    headline: "10 Best Coffee Subscription Boxes You Must Try",
    siteUrl: "www.wedreamofcoffee.com",
    siteLogoUrl: "seo/wdoc logo.png",
    siteDescription:
      "Explore the world of coffee on our comprehensive website. Discover local coffee roasters, stay updated on coffee festival events, explore a variety of coffee subscription boxes, indulge in a virtual cafe experience, and satisfy your coffee curiosities with our chatGPT feature. Immerse yourself in the rich and diverse coffee culture. Start your coffee adventure with us today!",
    canonicalURL: "www.wedreamofcoffee.com" + asPath,
    keywords: [
      "coffee subscription",
      "coffee box",
      "curated coffee",
      "monthly coffee",
      "personalized coffee subscription",
      "best coffee subscription",
      "top coffee subscription",
      "unique coffee subscription",
      "international coffee subscription",
    ],
    description:
      "Explore our curated selection of the top 10 best coffee subscription boxes. Discover a world of exceptional flavors, convenience, and monthly coffee delights delivered to your doorstep.",
    datePublished: "2022-06-21T23:04:13Z",
    dateModified: new Date().toLocaleString(),
    openGraphURL: "seo/Open Graph/coffee subscription list app.png",
    twitterCardURL: "seo/Twitter Card/coffee subscription boxes.png",
  };

  return (
    <>
      <SEO
        title={`${meta.title} | We Dream Of Coffee`}
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
                  "@id": "${meta.siteUrl}/#organization",
                  "name": "We Dream Of Coffee",
                  "url": "${meta.siteUrl}",
                  "sameAs":[
                    "https://www.facebook.com/wedreamofcoffee/",
                    "https://twitter.com/wedreamofcoffee/",
                    "https://www.pinterest.com/wedreamofcoffee/"],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "${meta.siteUrl}/#logo",
                    "inLanguage": "en-US",
                    "url": "${meta.siteUrl}/${meta.siteLogoUrl}",
                    "contentUrl": "${meta.siteUrl}/${meta.siteLogoUrl}",
                    "width": 500,
                    "height": 500,
                    "caption": "WeDreamOfCoffee"
                    },
                  "image": {"@id": "${meta.siteUrl}/#logo"},
                  "founder": {
                    "@type": "Person",
                    "name": "Hong Le",
                    "url": "${meta.siteUrl}/#about-us",
                    "sameAs": "${meta.siteUrl}/about-us"},
                  "foundingDate": "2018-05-02",
                  "numberOfEmployees": 5,
                  "slogan": "Unveiling the Essence of Coffee: Roasters, Festivals, Subscriptions, and More!",
                  "description": "${meta.siteDescription}",
                  "legalName": "We Dream Of Coffee",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "South San Francisco", 
                    "addressRegion": "CA", 
                    "postalCode": "94080", 
                    "streetAddress": "940 Mission Rd"}
                },
                {
                  "@type": "WebSite",
                  "@id": "${meta.siteUrl}/#website",
                  "url": "${meta.siteUrl}",
                  "name": "We Dream Of Coffee",
                  "description": "Unveiling the Essence of Coffee: Roasters, Festivals, Subscriptions, and More!",
                  "publisher":{
                    "@id": "${meta.siteUrl}/#organization"},
                    "potentialAction":[{
                      "@type":"SearchAction",
                      "target":{
                        "@type": "EntryPoint",
                        "urlTemplate": "${meta.siteUrl}/?s={search_term_string}"},
                      "query-input": "required name=search_term_string"}],
                    "inLanguage": "en-US",
                    "copyrightHolder": {"@id": "${meta.siteUrl}/#organization"}
                },
                {
                  "@type": "ImageObject",
                  "@id": "${meta.canonicalURL}/#primaryimage",
                  "inLanguage": "en-US",
                  "url": "${meta.siteUrl}/${meta.openGraphURL}",
                  "contentUrl": "${meta.siteUrl}/${meta.openGraphURL}",
                  "width": 1200,
                  "height": 627
                },
                {
                  "@type": "WebPage",
                  "@id": "${meta.canonicalURL}/#webpage",
                  "url": "${meta.canonicalURL}",
                  "name": "${meta.title}",
                  "isPartOf": {"@id": "${meta.siteUrl}/#website"},
                  "primaryImageOfPage": {"@id": "${meta.canonicalURL}/#primaryimage"},
                  "datePublished": "${meta.datePublished}",
                  "dateModified": "${meta.dateModified}",
                  "description": "${meta.description}",
                  "breadcrumb": {"@id": "${meta.canonicalURL}/#breadcrumb"},
                  "inLanguage": "en-US",
                  "potentialAction":[{
                    "@type": "ReadAction",
                    "target": ["${meta.canonicalURL}"]}]
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "${meta.canonicalURL}/#breadcrumb",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "${meta.siteUrl}"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Coffee Subscription Boxes",
                    "item": "${meta.canonicalURL}"
                  },]
                },
                {
                  "@type": "Article",
                  "@id": "${meta.canonicalURL}/#article",
                  "isPartOf": {"@id": "${meta.canonicalURL}/#webpage"}, 
                  "author": {"@id": "${meta.siteUrl}/#/schema/person/1"},
                  "headline": "${meta.headline}",
                  "datePublished": "${meta.datePublished}",
                  "dateModified": "${meta.dateModified}",
                  "mainEntityOfPage": {"@id": "${meta.canonicalURL}/#webpage"},
                  "wordCount": 1000,
                  "commentCount": 6,
                  "publisher": {"@id": "${meta.siteUrl}/#organization"},
                  "image": {"@id": "${meta.canonicalURL}/#primaryimage"},
                  "thumbnailUrl": "${meta.siteUrl}/${meta.openGraphURL}",
                  "keywords": "${meta.keywords}",
                  "inLanguage": "en-US",
                  "potentialAction": [{
                    "@type": "CommentAction",
                    "name": "Comment",
                    "target": ["${meta.canonicalURL}#respond"]}],
                  "copyrightYear": "2020",
                  "copyrightHolder": {"@id": "${meta.siteUrl}/#organization"}
                },
                {
                  "@type": "FAQPage",
                  "@id": "${meta.canonicalURL}/#faq-block",
                  "isPartOf": {"@id": "${meta.canonicalURL}/#webpage"},
                  "author": {"@id": "${meta.siteUrl}/#/schema/person/1"},
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
                  "@id": "${meta.siteUrl}/#/schema/person/1",
                  "name": "Hong Le",
                  "image": {
                    "@type":"ImageObject",
                    "@id": "${meta.siteUrl}/#personlogo",
                    "inLanguage": "en-US",
                    "url": "https://secure.gravatar.com/avatar/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                    "contentUrl": "https://secure.gravatar.com/avatar/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                    "caption": "Hong Le"
                    },
                  "description": "Hong Le is the creative marketing manager at WeDreamOfCoffee. She loves building coffee applications that bring you value",
                  "sameAs":[
                    "${meta.siteUrl}",
                    'https://www.facebook.com/hongrosele/',
                    'https://twitter.com/honglerose',
                    'https://www.pinterest.com/hongrosele/',],
                    "url": "${meta.siteUrl}/#about-us/team/hong-le/"
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
        <div className="my-5 md:my-20 flex flex-col items-start justify-start gap-4">
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
