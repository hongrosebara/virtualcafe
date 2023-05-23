import fs from "fs";
import path from "path";

export const buildPaths = (jsonFile) => {
  return path.join(process.cwd(), "data", jsonFile);
};

export function extractSound(filepath) {
  const fileData = fs.readFileSync(filepath);
  const data = JSON.parse(fileData);
  return data;
}