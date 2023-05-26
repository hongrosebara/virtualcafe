import { Layout } from "@/components/common";
import s from "./About.module.scss";

const About = () => {
  return (
    <section>
      <div className="relative flex items-center justify-start">
        <div className="w-full h-[40vh] bg-primary-dk bg-[url('https://res.cloudinary.com/dkv6uc5me/image/upload/v1685071001/brigitte-tohm-EAay7Aj4jbc-unsplash_nsvwrw.jpg')] bg-cover bg-center rounded-lg">
          <div className="absolute w-full h-full inset-0 backdrop-brightness-50">
            <div className="absolute p-20 text-on-lt w-full md:w-1/2 top-1/2 -translate-y-1/2">
              <h1 className="font-heading font-bold text-2xl">About us</h1>
              <p className="my-3 font-serif font-light">
                At Wedreamofcoffee, we believe that coffee is more than just a
                beverage—it's a source of inspiration, connection, and endless
                possibilities. Our philosophy revolves around celebrating the
                essence of coffee and sharing its captivating journey with the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={s["main-content"]}>
        <div>
          <h1>Our Philosophy: Celebrating the Essence of Coffee</h1>
          <p>
            We are driven by an unwavering passion for perfection in everything
            we do. From the selection of coffee roasters to the curation of
            festival events, our meticulous attention to detail ensures that
            every aspect of your coffee experience is exceptional. We strive to
            showcase the finest flavors, the most innovative techniques, and the
            richest traditions, guiding you on a path of discovery and delight.
          </p>
        </div>

        <div>
          <h1>Curiosity and Exploration</h1>
          <p>
            We are firm believers in the power of curiosity and the joy of
            exploration. Coffee is a never-ending journey, full of intriguing
            flavors, fascinating techniques, and endless discoveries. We strive
            to fuel your curiosity by providing a platform that encourages
            exploration. Our coffee store directory, coffee subscription boxes,
            and extensive resources are designed to inspire you to step out of
            your comfort zone, try new flavors, and broaden your coffee
            horizons.
          </p>
        </div>

        <div>
          <h1>Ethical and Sustainable Practices</h1>
          <p>
            Coffee is deeply intertwined with communities around the world, and
            we recognize our responsibility to promote ethical and sustainable
            practices within the industry. We are committed to working with
            coffee roasters who prioritize fair trade, environmental
            stewardship, and social responsibility. By highlighting these
            values, we hope to contribute to a coffee industry that respects and
            uplifts the lives of farmers, promotes sustainable sourcing, and
            protects the environment.
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
            unraveling the complexities of coffee, and empowering you to become
            a more discerning and engaged coffee lover.
          </p>
        </div>

        <div className="my-5">
          We invite you to embark on an extraordinary journey into the world of
          coffee. We are driven by our love for this remarkable beverage and our
          desire to share its wonders with you. Join us as we celebrate the
          artistry, the heritage, and the magic of coffee, one sip at a time.
        </div>
      </div>
    </section>
  );
};
export default About;

About.Layout = Layout;
