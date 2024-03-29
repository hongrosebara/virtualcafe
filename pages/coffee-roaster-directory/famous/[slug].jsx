import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/common";
import { buildPaths, extractFile } from "@/components/utils/getData";

export async function getStaticProps({ params }) {
  const roasterPath = buildPaths("roasters.json");
  const roasters = extractFile(roasterPath).data;

  return {
    props: {
      roaster: roasters.find((roaster) => {
        return roaster.id.toString() === params.slug;
      }),
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  const roasterPath = buildPaths("roasters.json");
  const roasters = extractFile(roasterPath).data;

  const paths = roasters.map((roaster) => {
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

const FamousRoaster = ({ roaster }) => {
  return (
    <section className="wrapper">
      {roaster && (
        <div className="flex flex-col justify-start items-start">
          <Link href="/coffee-roaster-directory/famous/" className="mb-5">
            Go back
          </Link>
          <Image
            src={
              roaster.imgUrl ||
              "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            height={300}
            width={300}
          />
          <h1>{roaster.name}</h1>
          <div>{roaster.neighbourhood}</div>
          <div>{roaster.address}</div>
          <button className="px-5 py-3 rounded-sm bg-secondary">
            <Link href={roaster.websiteUrl}>Check it out</Link>
          </button>
        </div>
      )}
    </section>
  );
};

export default FamousRoaster;

FamousRoaster.Layout = Layout;
