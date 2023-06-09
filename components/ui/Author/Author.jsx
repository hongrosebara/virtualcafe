import Image from "next/image";

const Author = ({ date, author, readTime }) => {
  return (
    <div className="flex justify-start space-x-10 my-5">
      <Image src="/chair-white.svg" height={50} width={50} />
      <div className="flex flex-col space-y-2 tracking-wider font-light font-round">
        <h5>{author}</h5>
        <div className="flex items-center justify-center">
          Published <span className="dot"></span> {readTime} mins read
          <span className="dot"></span> {date}
        </div>
      </div>
    </div>
  );
};
export default Author;
