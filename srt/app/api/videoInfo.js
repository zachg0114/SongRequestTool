// /pages/api/videoInfo.js
import ytdl from "@distube/ytdl-core";

export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "No video ID provided" });
  }
  try {
    const data = await ytdl.getInfo(id);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching video info:", error);
    res.status(500).json({ error: error.message });
  }
}
