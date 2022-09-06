import fs from "fs";
import path from "path";

export function buildAmbiencePath() {
  return path.join(process.cwd(), 'data', 'ambience.json')
}

export function buildEffectPath() {
  return path.join(process.cwd(), 'data', 'effects.json')
}

export function extractSound(filepath) {
  const fileData = fs.readFileSync(filepath);
  const data = JSON.parse(fileData);
  return data
}

const {ambience} = require('@/data/ambience.json')
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(ambience)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}
