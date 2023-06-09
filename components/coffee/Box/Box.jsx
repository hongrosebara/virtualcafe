import Image from "next/image";
import Link from "next/link";

const Box = ({ box, imgUrl, index }) => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 items-center cursor-pointer">
      <div className="md:col-span-1 rounded-md">
        <div
          style={{ "--image-url": `url(${imgUrl})` }}
          className={`w-full h-[40vh] bg-primary-dk bg-[image:var(--image-url)] bg-cover bg-center rounded-md`}
        ></div>
        {/* <Image
          src={
            imgUrl ||
            "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          height={800}
          width={800}
          className="rounded-md"
          alt={`coffee subscriptions ${box.title}`}
        /> */}
      </div>
      <div className="md:col-span-2 p-6 md:ml-10">
        <h2 className="font-bold text-xl">
          {index}. {box.title}
        </h2>
        <p>{box.excerpt}</p>
        <Link href={box.link} target="_blank" rel="nofollow">
          <button className="rounded-sm uppercase text-sm bg-primary-dk text-on-primary-inverse hover:bg-primary px-7 py-3">
            Check it out
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Box;
