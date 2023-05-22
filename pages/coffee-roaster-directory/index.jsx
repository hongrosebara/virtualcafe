import Roaster from "@/components/roasters/Roaster";
import { fetchRoasters } from "lib/coffee-roaster";
import { UseTrackLocation } from "@/components/hooks/UseTrackLocation";
import { useEffect, useContext } from "react";
import { ACTION_TYPES, RoasterContext } from "context/Roaster";
import roasterData from "@/data/roasters/coffee.json";

export async function getStaticProps() {
  return {
    props: { roasters: roasterData },
  };
}

const CoffeeRoasterDirectory = (props) => {
  // set states
  const { dispatch, state } = useContext(RoasterContext);
  const { roasters, latLong } = state;
  const { isFindingLocation, handleTrackLocation, locationErrorMsg } =
    UseTrackLocation();

  console.log({ latLong, locationErrorMsg });

  useEffect(() => {
    async function setRoastersByLocation() {
      if (latLong) {
        try {
          const fetchedRoasters = await fetchRoasters(latLong, 30);
          dispatch({
            type: ACTION_TYPES.SET_ROASTERS,
            payload: {
              roasters: fetchedRoasters,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    setRoastersByLocation();
  }, [latLong]);

  const handleGeolocation = () => {
    handleTrackLocation();
  };

  return (
    <>
      <h1>Coffee Roaster Directory</h1>
      <button className="bg-primary-light" onClick={handleGeolocation}>
        {isFindingLocation ? "Locating ..." : "View roasters nearby"}
      </button>
      {locationErrorMsg ?? <p>Something went wrong: {locationErrorMsg}</p>}
      <p>Discover your coffee roasters</p>
      <div className="flex items-center justify-between space-x-4">
        {roasters.length > 0 &&
          roasters.map((roaster) => (
            <Roaster key={roaster.id} roaster={roaster} />
          ))}
      </div>
      <p>Famous roasters</p>
      <div className="flex items-center justify-between space-x-4">
        {props.roasters.length > 0 &&
          props.roasters.map((roaster) => (
            <Roaster key={roaster.id} roaster={roaster} />
          ))}
      </div>
    </>
  );
};

export default CoffeeRoasterDirectory;
