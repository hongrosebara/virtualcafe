import fs from "fs";
import path from "path";

export function buildAmbiencePath() {
  return path.join(process.cwd(), 'data', 'cafes.json')
}

export function buildEffectPath() {
  return path.join(process.cwd(), 'data', 'effects.json')
}

export function buildMusicPath() {
  return path.join(process.cwd(), 'data', 'music.json')
}

export function extractSound(filepath) {
  const fileData = fs.readFileSync(filepath);
  const data = JSON.parse(fileData);
  return data
}

