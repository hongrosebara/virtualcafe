import Image from "next/image";
import Link from "next/link";
import s from "./Hero.module.scss";

const Hero = () => {

  return (
    <section className="relative flex items-center justify-center">
      {/* <Image
        src="/assets/home/desktop/image-hero-coffeepress.jpg"
        width={1300}
        height={600}
        className="rounded-sm"
        alt="wedreamofcoffee hero image"
      /> */}
      <div className="w-full h-[80vh] bg-primary-dk bg-[url('https://res.cloudinary.com/dkv6uc5me/image/upload/v1685071364/hero_image_ka22gw.jpg')] bg-cover bg-center rounded-lg">
        <div className="absolute inset-0 w-full h-full backdrop-brightness-50">
          <div className={s["hero__text-box"]}>
            <h1 className="font-heading font-bold">
              Ask Us Anything About Coffee.
            </h1>
            <p className="font-light text-lg pr-30 py-10">
              We are your ultimate destination for all things coffee, offering a
              curated collection of resources and interactive features designed
              to awaken your senses and enrich your coffee journey.
            </p>
            <Link href="/ask-anything-about-coffee/">
              <button className="mt-3 bg-surface hover:bg-surface-dk px-10 py-5 rounded-md text-xl text-on-primary shadow-sm">
                Ask Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
