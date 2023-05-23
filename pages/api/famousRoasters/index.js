import famousRoasters from "@/data/roasters/famous.json";

const getFamousRoastersFromData = (req, res) => {
  try {
    // Get id, name, address, neighbourhood, websiteUrl, imgUrl
    res.status(200);
    res.json(famousRoasters);
  } catch (err) {
    res.status(500);
    console.error("getFamousRoastersFromData", err);
    res.json({ message: "Something went wrong" });
  }
};

export default getFamousRoastersFromData;
