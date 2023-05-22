import { table, getMinifiedRecords } from "lib/airtable";

const createRoaster = async (req, res) => {
  if (req.method === "POST") {
    const { id, name, address, neighbourhood, voting, imgUrl } = req.body;
    try {
      if (id) {
        const findRoasterRecords = await table
          .select({
            filterByFormula: `id="${id}"`,
          })
          .firstPage();

        if (findRoasterRecords.length !== 0) {
          // find record
          const records = getMinifiedRecords(findRoasterRecords);

          res.json(records);
        } else {
          // create record
          if (name) {
            const createRecords = await table.create([
              {
                fields: {
                  id,
                  name,
                  address,
                  neighbourhood,
                  voting,
                  imgUrl,
                },
              },
            ]);

            const records = getMinifiedRecords(createRecords);

            res.json({ message: "create a record", records: records });
          } else {
            res.status(400);
            res.json({ message: "Id or name is missing" });
          }
        }
      } else {
        res.status(400);
        res.json({ message: "Id is missing" });
      }
    } catch (error) {
      console.error("Error finding or creating store", error);
      res.status(500);
      res.json({ message: "Error finding or creating store", error });
    }
  }
};

export default createRoaster;
