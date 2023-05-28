import { Layout, SEO } from "@/components/common";
import { useRouter } from "next/router";
import { Container, Breadcrumb } from "@/components/ui";
import { formattedDate } from "@/components/utils";

const AskChatGPT = () => {
  const { asPath } = useRouter();

  const meta = {
    title:
      "Ask Us Anything About Coffee",
    headline:
      "Unleash Your Coffee Curiosity: Ask Anything with Our Coffee Chat App",
    siteUrl: "www.wedreamofcoffee.com",
    siteLogoUrl: "seo/wdoc logo.png",
    siteDescription:
      "Explore the world of coffee on our comprehensive website. Discover local coffee roasters, stay updated on coffee festival events, explore a variety of coffee subscription boxes, indulge in a virtual cafe experience, and satisfy your coffee curiosities with our chatGPT feature. Immerse yourself in the rich and diverse coffee culture. Start your coffee adventure with us today!",
    author: "Hong Le",
    canonicalURL: "www.wedreamofcoffee.com" + asPath,
    keywords: [
      "coffee roaster finder",
      "find coffee roasters",
      "local coffee roasters",
      "coffee roaster locator",
      "coffee roaster map",
      "nearby coffee roasters",
      "coffee roaster directory",
    ],
    description:
      "Coming soon...",
    datePublished: "2023-01-21T23:04:13Z",
    dateModified: formattedDate,
    openGraphURL: "seo/Open Graph/coffee knowledge app.png",
    twitterCardURL: "seo/Twitter Card/coffee knowledge chat bot app.png",
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
                    "name": "Coffee Chat App",
                    "item": "${meta.canonicalURL}"
                  }]
                },
                {
                  "@type": "WebApplication",
                  "@id": "${meta.canonicalURL}/#article",
                  "isPartOf": {"@id": "${meta.canonicalURL}/#webpage"}, 
                  "author": {"@id": "${meta.siteUrl}/#/schema/person/1"},
                  "applicationCategory": "Utility",
                  "operatingSystem": "Windows, OS X, Android, iPhone",
                  "headline": "${meta.headline}",
                  "datePublished": "${meta.datePublished}",
                  "dateModified": "${meta.dateModified}",
                  "mainEntityOfPage": {"@id": "${meta.canonicalURL}/#webpage"},
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
                    "name": "How does the coffee chat app work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Our coffee chat app is designed to provide instant answers to your coffee-related questions. Simply type in your query, and our chatbot will generate a response based on a vast database of coffee knowledge.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "Can I ask any question about coffee?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Our chat app is designed to cater to all your coffee inquiries. From brewing techniques and coffee origins to flavor profiles and barista tips, feel free to ask anything related to coffee."
                    }
                  }, {
                    "@type": "Question",
                    "name": "Is the information provided by the chat app reliable?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our chat app sources information from reputable coffee experts and reliable sources. While we strive to ensure accuracy, please note that the responses provided are based on available data and general knowledge. For specific or specialized inquiries, it's always recommended to consult coffee professionals or experts."
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

      <Breadcrumb
        previousPage=""
        previousPageLink="/"
        currentPage={meta.headline}
      />

      <Container
        heading={meta.headline}
        description="Check back soon."
      >
        Check back in 1 week...
      </Container>
    </>
  );
};
export default AskChatGPT;

AskChatGPT.Layout = Layout;
