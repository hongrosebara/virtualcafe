import Image from "next/image";

const Author = () => {
  return (
    <div className="flex bg-white shadow-sm mx-auto mt-20 p-5">
      <div className="relative flex">
        <Image
          src="/assets/about/desktop/image-hero-whitecup.jpg"
          width={300}
          height={300}
          alt="author"
          className="my-auto h-24 w-24 border-gray-500 rounded-full border-4"
        />

        <p className="my-auto pl-10">
          <strong>Hong Le</strong> is a passionate coffee connoisseur who weaves her love for coffee into captivating words. With a keen eye for detail and a taste for the extraordinary, Hong takes readers on a journey through the realm of coffee, uncovering its rich flavors, captivating stories, and cultural significance.
        </p>
        <div className="absolute  bottom-0 right-0  inline-flex">
          <a className="mx-2" href="#">
            <i className="fab fa-github"></i>
          </a>
          <a className="mx-2" href="#">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Author;
