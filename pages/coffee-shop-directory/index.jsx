import Shop from "@/components/shops/Shop";
import { fetchCoffeeShops } from "@/components/lib/coffee-shop";
import { UseTrackLocation } from "@/components/hooks/UseTrackLocation";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const coffeeShops = await fetchCoffeeShops();
  console.log(coffeeShops)

  return {
    props: { coffeeShops },
  };
}

const CoffeeShopDirectory = (props) => {
  // set states
  const [coffeeShops, setCoffeeShops] = useState('')

  const { isFindingLocation, handleTrackLocation, latLong, locationErrorMsg } =
    UseTrackLocation();

  console.log({ latLong, locationErrorMsg });

  useEffect(() => {
    async function setCoffeeShopsByLocation() {
      if (latLong) {
        try {
          const fetchedCoffeeShops = await fetchCoffeeShops(latLong.replace(/\s+/g, ''), 30);
          setCoffeeShops(fetchedCoffeeShops)
          console.log({ fetchedCoffeeShops });
        } catch (error) {
          console.log(error);
        }
      }
    }

    setCoffeeShopsByLocation();
  }, [latLong]);

  const handleGeolocation = () => {
    handleTrackLocation();
  };
  return (
    <>
      <h1>Coffee Shop Directory</h1>
      <button className="bg-primary-light" onClick={handleGeolocation}>
        {isFindingLocation ? "Locating ..." : "View shops nearby"}
      </button>
      {locationErrorMsg ?? <p>Something went wrong: {locationErrorMsg}</p>}
      <p>Discover your coffee shops</p>
      <div className="flex items-center justify-between space-x-4">
        {coffeeShops.length > 0 && coffeeShops.map((shop) => (
          <Shop key={shop.id} shop={shop} />
        ))}
      </div>
      <button>View shop nearby</button>
    </>
  );
};

export default CoffeeShopDirectory;
