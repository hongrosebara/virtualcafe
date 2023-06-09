import Image from "next/image";
import { SEO } from "@/components/common";
import { Layout } from "@/components/common";
import { Hero, FeatureItemList } from "@/components/ui";
import { useRouter } from "next/router";
import { buildPaths, extractFile } from "@/components/utils/getData";

export async function getStaticProps() {
  const featuresPath = buildPaths("featureItems.json");
  const featureItems = extractFile(featuresPath).data;
  return {
    props: { featureItems },
  };
}

const HomePage = ({ featureItems }) => {
  const { asPath } = useRouter();

  const meta = {
    title: "Home",
    headline: "We Dream Of Coffee Home Page",
    siteUrl: "www.wedreamofcoffee.com",
    siteLogoUrl: "seo/wdoc logo.png",
    siteDescription:
      "Explore the world of coffee on our comprehensive website. Discover local coffee roasters, stay updated on coffee festival events, explore a variety of coffee subscription boxes, indulge in a virtual cafe experience, and satisfy your coffee curiosities with our chatGPT feature. Immerse yourself in the rich and diverse coffee culture. Start your coffee adventure with us today!",
    author: "Hong Le",
    canonicalURL: "www.wedreamofcoffee.com" + asPath,
    keywords: [
      "coffee education",
      "find coffee roasters",
      "virtual cafe app with ambience sounds",
      "coffee recipes",
    ],
    description:
      "Discover the World of Coffee: Find Roasters, Festivals, Subscriptions, and More. Explore our website for a curated list of coffee roasters near you, exciting coffee festival events, premium coffee subscription boxes, a virtual cafe app to connect with coffee enthusiasts, and an AI-powered chatbot for all your coffee questions. Start your coffee adventure today!",
    datePublished: "2019-01-21T23:04:13Z",
    dateModified: new Date().toLocaleString(),
    openGraphURL: "seo/Open Graph/home.png",
    twitterCardURL: "seo/Twitter Card/home.png.png",
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
                  }]
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
                    "name": "How can I find coffee roasters near me?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Our website offers a dedicated page where you can easily find coffee roasters based on your location. Simply enter your city or address, and we'll provide you with a curated list of nearby roasters to explore and support.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "What is a virtual cafe app, and how can I use it?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our virtual cafe app with ambiance sounds is a web application that simulates the experience of being in a cafe environment from the comfort of your own space. It aims to recreate the ambiance and atmosphere of a bustling cafe, including background sounds such as chatter, clinking of cups, gentle music, and other ambient noises typically found in a cafe setting."
                    }
                  }]
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
                    "https://www.facebook.com/hongrosele/",
                    "https://twitter.com/honglerose/",
                    "https://www.pinterest.com/hongrosele/"],
                    "url": "${meta.siteUrl}/#about-us/team/hong-le/"
                }
              ]},
              }`,
          }}
        ></script>
      </SEO>

      <Hero />

      <FeatureItemList 
        heading="Featured Apps" 
        featureItems={featureItems} 
      />
    </>
  );
};

export default HomePage;

HomePage.Layout = Layout;
