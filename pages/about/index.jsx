import { Layout } from "@/components/common";
import s from "./About.module.scss";
import { SEO } from "@/components/common";
import { useRouter } from "next/router";

const About = () => {
  const { asPath } = useRouter();
  const meta = {
    title: "About Page",
    headline: "About Us",
    siteUrl: "www.wedreamofcoffee.com",
    siteLogoUrl: "seo/wdoc logo.png",
    siteDescription:
      "Explore the world of coffee on our comprehensive website. Discover local coffee roasters, stay updated on coffee festival events, explore a variety of coffee subscription boxes, indulge in a virtual cafe experience, and satisfy your coffee curiosities with our chatGPT feature. Immerse yourself in the rich and diverse coffee culture. Start your coffee adventure with us today!",
    author: "Hong Le",
    canonicalURL: "www.wedreamofcoffee.com" + asPath,
    keywords: [
      "we dream of coffee about us page",
    ],
    description:
      "Our website is your ultimate destination for all things coffee. Explore our curated list of coffee roasters, discover upcoming coffee festival events, explore a variety of coffee subscription boxes, connect with coffee enthusiasts through our virtual cafe app, and get all your coffee questions answered with our AI-powered chatbot.",
    datePublished: "2021-06-21T23:04:13Z",
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
                    "name": "What is the purpose of this website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>Our website is dedicated to providing a comprehensive platform for coffee enthusiasts. We offer a range of features, including a coffee roaster finder, a page featuring coffee festival events, a collection of coffee subscription boxes, a virtual cafe app, and a chatbot where you can ask any coffee-related questions.</p>"
                    }
                  }, {
                    "@type": "Question",
                    "name": "Is your website free to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all the features and services on our website are completely free to use. Whether you're finding coffee roasters, exploring coffee festival events, browsing subscription boxes, using the virtual cafe app, or chatting with our AI-powered chatbot, there are no charges involved."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I contribute to your website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "<p>We appreciate community engagement and welcome contributions. If you know of any outstanding coffee roasters, upcoming coffee festival events, or noteworthy subscription boxes, please feel free to reach out to us. Your recommendations and contributions are valuable to us.</p>"
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

      <section>
        <div className="relative flex items-center justify-start">
          <div className="w-full h-[40vh] bg-primary-dk bg-[url('https://res.cloudinary.com/dkv6uc5me/image/upload/v1685071001/brigitte-tohm-EAay7Aj4jbc-unsplash_nsvwrw.jpg')] bg-cover bg-center rounded-lg">
            <div className="absolute w-full h-full inset-0 backdrop-brightness-50">
              <div className="absolute p-20 text-on-lt w-full md:w-1/2 top-1/2 -translate-y-1/2">
                <h1 className="font-heading font-bold text-2xl">About us</h1>
                <p className="my-3 font-serif font-light">
                  At Wedreamofcoffee, we believe that coffee is more than just a
                  beverage—it&apos;s a source of inspiration, connection, and
                  endless possibilities. Our philosophy revolves around
                  celebrating the essence of coffee and sharing its captivating
                  journey with the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={s["main-content"]}>
          <div>
            <h1>Our Philosophy: Celebrating the Essence of Coffee</h1>
            <p>
              We are driven by an unwavering passion for perfection in
              everything we do. From the selection of coffee roasters to the
              curation of festival events, our meticulous attention to detail
              ensures that every aspect of your coffee experience is
              exceptional. We strive to showcase the finest flavors, the most
              innovative techniques, and the richest traditions, guiding you on
              a path of discovery and delight.
            </p>
          </div>

          <div>
            <h1>Curiosity and Exploration</h1>
            <p>
              We are firm believers in the power of curiosity and the joy of
              exploration. Coffee is a never-ending journey, full of intriguing
              flavors, fascinating techniques, and endless discoveries. We
              strive to fuel your curiosity by providing a platform that
              encourages exploration. Our coffee store directory, coffee
              subscription boxes, and extensive resources are designed to
              inspire you to step out of your comfort zone, try new flavors, and
              broaden your coffee horizons.
            </p>
          </div>

          <div>
            <h1>Ethical and Sustainable Practices</h1>
            <p>
              Coffee is deeply intertwined with communities around the world,
              and we recognize our responsibility to promote ethical and
              sustainable practices within the industry. We are committed to
              working with coffee roasters who prioritize fair trade,
              environmental stewardship, and social responsibility. By
              highlighting these values, we hope to contribute to a coffee
              industry that respects and uplifts the lives of farmers, promotes
              sustainable sourcing, and protects the environment.
            </p>
          </div>

          <div>
            <h1>Education and Empowerment</h1>
            <p>
              Knowledge is at the heart of our philosophy. We believe that
              education empowers coffee enthusiasts to make informed choices and
              deepen their appreciation for this beloved beverage. Through our
              chatGPT feature and informative content, we aim to provide
              accessible and reliable information, answering your questions,
              unraveling the complexities of coffee, and empowering you to
              become a more discerning and engaged coffee lover.
            </p>
          </div>

          <div className="my-5">
            We invite you to embark on an extraordinary journey into the world
            of coffee. We are driven by our love for this remarkable beverage
            and our desire to share its wonders with you. Join us as we
            celebrate the artistry, the heritage, and the magic of coffee, one
            sip at a time.
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

About.Layout = Layout;
