const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

export const table = base("Table 1");

const getMinifiedRecord = (record) => {
  return { ...record.fields };
};

export const getMinifiedRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};
