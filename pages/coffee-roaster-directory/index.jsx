import Roaster from "@/components/roasters/Roaster";
import { fetchRoasters } from "lib/coffee-roaster";
import { UseTrackLocation } from "@/components/hooks/UseTrackLocation";
import { useEffect, useContext } from "react";
import { ACTION_TYPES, RoasterContext } from "context/Roaster";
import famousRoasters from "@/data/roasters/famous.json";

export async function getStaticProps() {
  const roasters = await fetchRoasters();
  return {
    props: {
      roasters: roasters,
      famousRoasters: famousRoasters,
    },
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
    <section className="wrapper">
      <h1>Coffee Roaster Directory</h1>
      <button className="bg-primary-light" onClick={handleGeolocation}>
        {isFindingLocation ? "Locating ..." : "View roasters nearby"}
      </button>
      {locationErrorMsg ?? <p>Something went wrong: {locationErrorMsg}</p>}
      <p>Discover your coffee roasters</p>
      <div className="flex items-center justify-between space-x-4">
        {roasters.length > 0 &&
          roasters.map((roaster) => (
            <Roaster
              directory="coffee-roaster-directory"
              key={roaster.id}
              roaster={roaster}
            />
          ))}
      </div>
      <p>Discover famous roasters</p>
      <div className="flex items-center justify-between space-x-4">
        {props.famousRoasters &&
          props.famousRoasters.map((roaster) => (
            <Roaster
              directory="coffee-roaster-directory/famous"
              key={roaster.id}
              roaster={roaster}
            />
          ))}
      </div>
    </section>
  );
};

export default CoffeeRoasterDirectory;
