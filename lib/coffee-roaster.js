import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getUrl = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeShopPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "coffee roaster",
    perPage: 40,
  });

  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchRoasters = async (
  latLong = "21.02847926747364,105.85091984004878",
  limit = 6
) => {
  const photos = await getListOfCoffeeShopPhotos();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(getUrl(latLong, "coffee roaster", limit), options);

  const data = await response.json();

  return data.results.map((result, index) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address ? result.location.address : null,
      region: result.location.region,
      imgUrl: photos.length > 0 ? photos[index] : null,
    };
  });
};
