import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    console.log("Req:>>", req);
    const yotubeVideos = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAGbJaPxHjWPEDVuDI09Mki1lqgmlVdLCE&chart=mostPopular&part=contentDetails,statistics,topicDetails,snippet&maxResults=50&regionCode=KE`
    );
    res.send(yotubeVideos.data.items);
  }
}
