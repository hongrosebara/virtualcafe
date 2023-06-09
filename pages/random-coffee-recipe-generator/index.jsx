import {
  markdownWithMeta,
  buildPathsForMarkdown,
  extractFolder,
} from "@/components/utils/getData";
import matter from "gray-matter";
import { RecipeList } from "@/components/coffee";
import { getListOfCoffeeSubscriptionBoxPhotos } from "@/lib/coffee-roaster";
import { useRouter } from "next/router";
import { SEO, Layout } from "@/components/common";
import { Container, Breadcrumb, TopBar } from "@/components/ui";
import { formattedDate, sortByDate } from "@/components/utils";
import { SITE_SEO } from "seo-config";

export async function getStaticProps() {
  // Get photos from Unsplash
  const photos = await getListOfCoffeeSubscriptionBoxPhotos();
  // Generate markdown posts
  const recipePath = buildPathsForMarkdown("recipes", "random");
  const recipes = extractFolder(recipePath).map((recipe, index) => {
    const slug = recipe.replace(".md", "");
    const content = markdownWithMeta(recipePath, recipe);
    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter,
      imgUrl: photos.length > 0 ? photos[index] : null,
    };
  });

  return {
    props: {
      recipes: recipes.sort(sortByDate).slice(0, 6),
    },
  };
}

const RandomRecipeGenerator = ({ recipes }) => {
  const { asPath } = useRouter();

  const meta = {
    title: "Check out our best coffee recipes",
    headline:
      "Fuel Your Coffee Adventure: Unleash the Unexpected with our Random Coffee Generator App",
    author: "Hong Le",
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
      "Get inspired and surprise your palate with delightful and unexpected combinations. Let the Random Coffee Recipe Generator take you on a flavor adventure!",
    datePublished: "June 21 2022",
    dateModified: formattedDate,
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
                  "@id": "${SITE_SEO.siteUrl}/#organization",
                  "name": "We Dream Of Coffee",
                  "url": "${SITE_SEO.siteUrl}",
                  "sameAs":[
                    "https://www.facebook.com/wedreamofcoffee/",
                    "https://twitter.com/wedreamofcoffee/",
                    "https://www.pinterest.com/wedreamofcoffee/"],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "${SITE_SEO.siteUrl}/#logo",
                    "inLanguage": "en-US",
                    "url": "${SITE_SEO.siteUrl}/${SITE_SEO.siteLogoUrl}",
                    "contentUrl": "${SITE_SEO.siteUrl}/${SITE_SEO.siteLogoUrl}",
                    "width": 500,
                    "height": 500,
                    "caption": "WeDreamOfCoffee"
                    },
                  "image": {"@id": "${SITE_SEO.siteUrl}/#logo"},
                  "founder": {
                    "@type": "Person",
                    "name": "Hong Le",
                    "url": "${SITE_SEO.siteUrl}/#about-us",
                    "sameAs": "${SITE_SEO.siteUrl}/about-us"},
                  "foundingDate": "2018-05-02",
                  "numberOfEmployees": 5,
                  "slogan": "Unveiling the Essence of Coffee: Roasters, Festivals, Subscriptions, and More!",
                  "description": "${SITE_SEO.siteDescription}",
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
                  "@id": "${SITE_SEO.siteUrl}/#website",
                  "url": "${SITE_SEO.siteUrl}",
                  "name": "We Dream Of Coffee",
                  "description": "Unveiling the Essence of Coffee: Roasters, Festivals, Subscriptions, and More!",
                  "publisher":{
                    "@id": "${SITE_SEO.siteUrl}/#organization"},
                    "potentialAction":[{
                      "@type":"SearchAction",
                      "target":{
                        "@type": "EntryPoint",
                        "urlTemplate": "${SITE_SEO.siteUrl}/?s={search_term_string}"},
                      "query-input": "required name=search_term_string"}],
                    "inLanguage": "en-US",
                    "copyrightHolder": {"@id": "${SITE_SEO.siteUrl}/#organization"}
                },
                {
                  "@type": "ImageObject",
                  "@id": "${meta.canonicalURL}/#primaryimage",
                  "inLanguage": "en-US",
                  "url": "${SITE_SEO.siteUrl}/${meta.openGraphURL}",
                  "contentUrl": "${SITE_SEO.siteUrl}/${meta.openGraphURL}",
                  "width": 1200,
                  "height": 627
                },
                {
                  "@type": "WebPage",
                  "@id": "${meta.canonicalURL}/#webpage",
                  "url": "${meta.canonicalURL}",
                  "name": "${meta.title}",
                  "isPartOf": {"@id": "${SITE_SEO.siteUrl}/#website"},
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
                    "item": "${SITE_SEO.siteUrl}"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Coffee Subscription Boxes",
                    "item": "${meta.canonicalURL}"
                  }]
                },
                {
                  "@type": "Article",
                  "@id": "${meta.canonicalURL}/#article",
                  "isPartOf": {"@id": "${meta.canonicalURL}/#webpage"}, 
                  "author": {"@id": "${SITE_SEO.siteUrl}/#/schema/person/1"},
                  "headline": "${meta.headline}",
                  "datePublished": "${meta.datePublished}",
                  "dateModified": "${meta.dateModified}",
                  "mainEntityOfPage": {"@id": "${meta.canonicalURL}/#webpage"},
                  "wordCount": 1000,
                  "commentCount": 6,
                  "publisher": {"@id": "${SITE_SEO.siteUrl}/#organization"},
                  "image": {"@id": "${meta.canonicalURL}/#primaryimage"},
                  "thumbnailUrl": "${SITE_SEO.siteUrl}/${meta.openGraphURL}",
                  "keywords": "${meta.keywords}",
                  "inLanguage": "en-US",
                  "potentialAction": [{
                    "@type": "CommentAction",
                    "name": "Comment",
                    "target": ["${meta.canonicalURL}#respond"]}],
                  "copyrightYear": "2020",
                  "copyrightHolder": {"@id": "${SITE_SEO.siteUrl}/#organization"}
                },
                {
                  "@type": "FAQPage",
                  "@id": "${meta.canonicalURL}/#faq-block",
                  "isPartOf": {"@id": "${meta.canonicalURL}/#webpage"},
                  "author": {"@id": "${SITE_SEO.siteUrl}/#/schema/person/1"},
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
                  },
                  {
                    "@type": "Question",
                    "name": "Why do people pay for expensive coffee?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Expensive coffee often represents higher quality and superior flavor profiles. Specialty coffee beans are carefully sourced, meticulously roasted, and crafted to bring out the unique characteristics of each origin. These coffees tend to offer complex flavor profiles, distinct tasting notes, and exceptional taste experiences that coffee lovers appreciate and are willing to pay for.</p>"
                    }
                  }]
                },
                {
                  "@type":"Person",
                  "@id": "${SITE_SEO.siteUrl}/#/schema/person/1",
                  "name": "Hong Le",
                  "image": {
                    "@type":"ImageObject",
                    "@id": "${SITE_SEO.siteUrl}/#personlogo",
                    "inLanguage": "en-US",
                    "url": "https://secure.gravatar.com/avatar/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                    "contentUrl": "https://secure.gravatar.com/avatar/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                    "caption": "Hong Le"
                    },
                  "description": "Hong Le is the creative marketing manager at WeDreamOfCoffee. She loves building coffee applications that bring you value",
                  "sameAs":[
                    "${SITE_SEO.siteUrl}",
                    "https://www.facebook.com/hongrosele/",
                    "https://twitter.com/honglerose/",
                    "https://www.pinterest.com/hongrosele/"],
                    "url": "${SITE_SEO.siteUrl}/#about-us/team/hong-le/"
                }
              ]},
              }`,
          }}
        ></script>
      </SEO>

      <Breadcrumb
        previousPage=""
        previousPageLink="/"
        currentPage={meta.headline}
      />

      <Container 
        heading={meta.headline} 
        description={meta.description}
        topBar={true}
        author={meta.author}
        date={meta.date}
        readTime={2}
      >
 

        <RecipeList heading="All Recipes" recipes={recipes} />
      </Container>
    </>
  );
};

export default RandomRecipeGenerator;

RandomRecipeGenerator.Layout = Layout;
