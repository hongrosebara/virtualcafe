import Image from "next/image";
import Link from "next/link";

const Box = ({ box, imgUrl }) => {
  console.log(imgUrl)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-start cursor-pointer">
      <div className="md:col-span-1 rounded-md">
        <Image
          src={
            imgUrl ||
            "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          height={600}
          width={600}
          className="rounded-md"
          alt={`coffee subscriptions ${box.title}`}
        />
      </div>
      <div className="md:col-span-2 p-6">
        <h2 className="font-bold text-lg">{box.title}</h2>
        <p>{box.excerpt}</p>
        <Link href={box.link} target="_blank" rel="nofollow">
          <button className="mt-10 rounded-sm uppercase text-sm bg-primary-dk text-on-lt hover:bg-primary px-7 py-3">Check it out</button>
        </Link>
      </div>
    </div>
  );
};
export default Box;
