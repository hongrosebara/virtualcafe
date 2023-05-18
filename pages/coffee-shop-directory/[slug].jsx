import { useRouter } from "next/router";
import Image from "next/image";
import { fetchCoffeeShops } from "@/components/lib/coffee-shop";

export async function getStaticProps({ params }) {
  const coffeeShops = await fetchCoffeeShops();

  return {
    props: {
      coffeeShop: coffeeShops.find((coffeeShop) => {
        return coffeeShop.name === params.slug; //dynamic Id
      }),
    },
  };
}

export async function getStaticPaths() {
  const coffeeShops = await fetchCoffeeShops();
  const paths = coffeeShops.map((coffeeShop) => {
    return {
      params: {
        slug: coffeeShop.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const CoffeeShop = ({ coffeeShop }) => {
  const { address, region, name, imgUrl } = coffeeShop;
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-start items-start">
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
export default CoffeeShop;
