import fs from "fs";
import path from "path";

// For Json Files
export const buildPaths = (jsonFile) => {
  return path.join(process.cwd(), "data", jsonFile);
};

export function extractFile(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

// For Posts
export const markdownWithMeta = (folder, post) => {
  return fs.readFileSync(path.join(folder, post), "utf-8");
};

export const buildPathsForPosts = (folder) => {
  return path.join("posts", folder);
};

export function extractFolder(folderPath) {
  const folderData = fs.readdirSync(folderPath);
  return folderData;
}
