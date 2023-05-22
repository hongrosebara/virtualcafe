import famousRoasters from "@/data/roasters/famous.json";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const roaster = famousRoasters.find((roaster) => {
    return roaster.id.toString() === params.slug;
  });

  return {
    props: {
      roaster: roaster ? roaster : {}, //dynamic Id
    },
  };
}

export async function getStaticPaths() {
  const paths = famousRoasters.map((roaster) => {
    return {
      params: {
        slug: roaster.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const FamousRoaster = ({roaster}) => {
  const {id, name, address, region, voting, imgUrl} = roaster;
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <Link href="/coffee-roaster-directory/famous/">Go back</Link>
        <Image
          src={
            imgUrl ||
            "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          height={300}
          width={300}
        />
        <h1>{name}</h1>
        <div>{region && <p>{region}</p>}</div>
        <div>{address && <p>{address}</p>}</div>
      </div>
    </>
  );
};
export default FamousRoaster;
