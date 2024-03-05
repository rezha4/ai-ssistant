import { connectToDB } from "../../../utils/database";
import Prompt from "../../../models/prompt";

export const GET = async (requres) => {
  try {
    await connectToDB();

    const prompts = Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Error fetching posts", { status: 500 });
  }
};
