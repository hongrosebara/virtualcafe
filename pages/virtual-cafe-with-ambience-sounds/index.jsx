import { buildPaths, extractFile } from "@/components/utils/getData";
import { Player, MusicPlayer } from "@/components/coffee";
import SpotifyPlayer from "react-spotify-player";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout, SEO } from "@/components/common";

export async function getStaticProps() {
  const cafePath = buildPaths("cafes.json");
  const effectPath = buildPaths("effects.json");
  const musicPath = buildPaths("music.json");
  const cafes = extractFile(cafePath).data;
  const effects = extractFile(effectPath).data;
  const music = extractFile(musicPath).data;
  return {
    props: { cafes, effects, music },
  };
}

const VirtualCafe = ({ cafes, effects, music }) => {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: "100%",
    height: 200,
  };
  const view = "coverart"; // or 'coverart'
  const theme = "white"; // or 'white'

  const { asPath } = useRouter();

  const meta = {
    title:
      "Boost Focus and Creativity: Unwind with Our Virtual Cafe App and Soothing Ambience Sounds",
    headline:
      "Escape to a Virtual Coffee Haven: Enjoy the Sounds of a Cafe with Our Virtual Cafe App!",
    siteUrl: "www.wedreamofcoffee.com",
    siteLogoUrl: "seo/wdoc logo.png",
    siteDescription:
      "Explore the world of coffee on our comprehensive website. Discover local coffee roasters, stay updated on coffee festival events, explore a variety of coffee subscription boxes, indulge in a virtual cafe experience, and satisfy your coffee curiosities with our chatGPT feature. Immerse yourself in the rich and diverse coffee culture. Start your coffee adventure with us today!",
    author: "Hong Le",
    canonicalURL: "www.wedreamofcoffee.com" + asPath,
    keywords: [
      "virtual cafe app",
      "ambience sounds",
      "cafe atmosphere",
      "coffee shop simulation",
      "relaxation app",
      "productivity app",
      "focus enhancement",
      "cafe ambiance",
      "immersive cafe experience",
    ],
    description:
      "Boost your productivity and creativity for work and school with ambience sounds at this virtual cafe.",
    datePublished: "2021-01-21T23:04:13Z",
    dateModified: new Date().toLocaleString(),
    openGraphURL: "seo/Open Graph/virtual cafe app.png",
    twitterCardURL: "seo/Twitter Card/virtual cafe app.png",
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
                    "name": "Coffee Roaster Finder App",
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
                    "name": "What are the benefits of using a virtual cafe app?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Using a virtual cafe app with ambience sounds offers several benefits. It provides a soothing and immersive environment, creating a sense of presence in a coffee shop. This can enhance relaxation, focus, and productivity for activities such as work, study, reading, writing, or simply enjoying a cup of coffee.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "Can I provide feedback or suggestions for the virtual cafe app?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We welcome feedback and suggestions from users. If you have any specific questions or need further assistance regarding a particular virtual cafe app, please refer to the app's support resources or contact their customer support team. Enjoy the virtual cafe experience and the ambiance sounds that transport you to your favorite coffee shop!"
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

      <section className="section-main grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-1 lg:col-span-3 font-serif font-medium">
          <div className="m-3">
            {cafes.map((sound) => (
              <Player key={sound.name} sound={sound} />
            ))}

            {effects.map((sound) => (
              <Player key={sound.name} sound={sound} />
            ))}

            <div className="mx-3 col-span-4">
              <MusicPlayer music={music} />
            </div>

            <div className="mx-3 mt-3 rounded-sm">
              <SpotifyPlayer
                className="rounded-sm"
                uri="spotify:artist:2Kx7MNY7cI1ENniW7vT30N"
                size={size}
                view={view}
                theme={theme}
              />
            </div>
          </div>
        </div>

        <div className="section-right col-span-1 lg:col-span-7 m-3">
          <div className="section-right__image-box my-3">
            <Image src="/coffeeshop.svg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VirtualCafe;

VirtualCafe.Layout = Layout;
