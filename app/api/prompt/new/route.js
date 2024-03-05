import { connectToDB } from "next.config.mjs";
import Prompt from "next.config.mjs";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  await connectToDB
};
