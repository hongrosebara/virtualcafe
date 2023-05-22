import { useRouter } from "next/router";
import Image from "next/image";
import { fetchRoasters } from "lib/coffee-roaster";
import { useState, useContext, useEffect } from "react";
import { RoasterContext } from "context/Roaster";
import { isEmpty } from "@/components/utils";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const roasters = await fetchRoasters();

  const roasterFromContext = roasters.find((roaster) => {
    return roaster.id.toString() === params.slug;
  });

  return {
    props: {
      roaster: roasterFromContext ? roasterFromContext : {}, //dynamic Id
    },
  };
}

export async function getStaticPaths() {
  const roasters = await fetchRoasters();
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

const Roaster = (initialProps) => {
  const [roaster, setRoaster] = useState(initialProps.roaster);
  const {
    state: { roasters },
  } = useContext(RoasterContext);

  console.log("roasters", roasters);

  const router = useRouter();
  const id = router.query.slug;

  const handleCreateRoaster = async (roaster) => {
    const { id, name, address, neighbourhood, voting, imgUrl } = roaster;
    try {
      const response = await fetch("/api/createRoaster", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          address: address || "",
          neighbourhood: neighbourhood || "",
          voting: 0,
          imgUrl,
        }),
      });

      const dbRoaster = response.json();
      console.log("dbRoaster", dbRoaster);
    } catch (error) {
      console.error("Error Creating Roaster", error);
    }
  };

  useEffect(() => {
    if (isEmpty(initialProps.roaster)) {
      if (roasters.length > 0) {
        const roasterFromContext = roasters.find((roaster) => {
          return roaster.id.toString() === id;
        });
        setRoaster(roasterFromContext);
        handleCreateRoaster(roasterFromContext);
      }
    } else {
      // SSG
      handleCreateCoffeeStore(initialProps.roaster);
    }
  }, [id, initialProps, initialProps.roaster]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, region, name, imgUrl } = roaster;

  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <Link href="/coffee-roaster-directory">Go back</Link>
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
export default Roaster;
