import { Roaster } from "@/components/coffee";
import { fetchRoasters } from "lib/coffee-roaster";
import { UseTrackLocation } from "@/components/hooks/UseTrackLocation";
import { useEffect, useContext } from "react";
import { ACTION_TYPES, RoasterContext } from "context/Roaster";
import { Layout } from "@/components/common";
import { buildPaths, extractFile } from "@/components/utils/getData";
import { SEO } from "@/components/common";
import { useRouter } from "next/router";
import { Container, Breadcrumb, HowToGuide } from "@/components/ui";

export async function getStaticProps() {
  const roasters = await fetchRoasters();
  const roasterPath = buildPaths("roasters.json");
  const famousRoasters = extractFile(roasterPath).data;

  return {
    props: {
      roasters: roasters,
      famousRoasters: famousRoasters,
      revalidate: 1,
    },
  };
}

const CoffeeRoasterDirectory = (props) => {
  // set states
  const { dispatch, state } = useContext(RoasterContext);
  const { roasters, latLong } = state;
  const { isFindingLocation, handleTrackLocation, locationErrorMsg } =
    UseTrackLocation();

  console.log({ latLong, locationErrorMsg });

  useEffect(() => {
    async function setRoastersByLocation() {
      if (latLong) {
        try {
          const fetchedRoasters = await fetchRoasters(latLong, 30);
          dispatch({
            type: ACTION_TYPES.SET_ROASTERS,
            payload: {
              roasters: fetchedRoasters,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    setRoastersByLocation();
  }, [latLong]);

  const handleGeolocation = () => {
    handleTrackLocation();
  };

  const { asPath } = useRouter();

  const meta = {
    title:
      "Find Local Coffee Roasters: Discover Artisanal Coffee with Our Roaster Finder App",
    headline:
      "Discover Your Perfect Brew: Find Local Coffee Roasters with Ease!",
    siteUrl: "www.wedreamofcoffee.com",
    siteLogoUrl: "seo/wdoc logo.png",
    siteDescription:
      "Explore the world of coffee on our comprehensive website. Discover local coffee roasters, stay updated on coffee festival events, explore a variety of coffee subscription boxes, indulge in a virtual cafe experience, and satisfy your coffee curiosities with our chatGPT feature. Immerse yourself in the rich and diverse coffee culture. Start your coffee adventure with us today!",
    author: null,
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
      "Discover the best local coffee roasters near you with our comprehensive directory. Support local and enjoy delicious, fresh coffee today!",
    datePublished: "2023-01-21T23:04:13Z",
    dateModified: new Date().toLocaleString(),
    openGraphURL: "seo/Open Graph/coffee roaster finder app.png",
    twitterCardURL: "seo/Twitter Card/coffee roaster finder app.png",
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
                    "name": "How does your coffee roaster finder app work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Our coffee roaster finder app utilizes location-based technology to identify and display nearby coffee roasters on a map. Simply open the app, grant location access, and explore a wide selection of local coffee roasters in your area.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "How frequently is the app updated with new coffee roaster listings?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We strive to keep our database of coffee roasters updated regularly. New listings are added as we discover and verify them. Additionally, we welcome user feedback to ensure our app stays current and reflects the evolving coffee roaster landscape."
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
        description="Click the button below to find your local coffee roasters"
        author={meta.author}
      >
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-primary text-on-lt uppercase py-10 px-20 rounded-md my-10"
            onClick={handleGeolocation}
          >
            {isFindingLocation ? "Locating ..." : "View roasters nearby"}
          </button>
          {locationErrorMsg ?? <p>Something went wrong: {locationErrorMsg}</p>}
        </div>

        <HowToGuide>
          <div>
            <h3>
              How does the coffee roaster finder app work
            </h3>
            <p>
              Our coffee roaster finder app utilizes your device's location
              services to determine your current location. It then uses that
              information to search for coffee roasters near you. The app
              displays a list of nearby coffee roasters along with relevant
              details such as address, contact information, and user reviews.
            </p>
          </div>
          <div>
            <h3>
              How can I enable location services for the coffee roaster finder
              app
            </h3>
            <p>
              To enable location services, go to your device's settings and find
              the app permissions or location settings. Make sure our coffee
              roaster finder app has permission to access your device's
              location. This allows the app to accurately identify your location
              and find nearby coffee roasters.
            </p>
          </div>
          <div>
            <h3>Can I contribute to the app's database by adding new coffee roasters?</h3>
            <p>If you know of a roaster that is not listed in the app, please contact us to submit a new roaster or suggest an addition. Your contribution is valuable and can help enhance the app's database for the benefit of other users.</p>
          </div>
        </HowToGuide>
        {/* <p>Discover your coffee roasters</p>
        <div className="flex items-center justify-between space-x-4">
          {roasters.length > 0 &&
            roasters.map((roaster) => (
              <Roaster
                directory="coffee-roaster-directory"
                key={roaster.id}
                roaster={roaster}
              />
            ))}
        </div>
        <div className="flex items-center justify-between space-x-4">
          {props.famousRoasters.length > 0 &&
            props.famousRoasters.map((roaster) => (
              <Roaster
                directory="coffee-roaster-directory/famous"
                key={roaster.id}
                roaster={roaster}
              />
            ))}
        </div> */}
      </Container>
    </>
  );
};

export default CoffeeRoasterDirectory;

CoffeeRoasterDirectory.Layout = Layout;
