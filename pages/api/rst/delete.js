import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from "uuid";

export default async function handler(request, response) {
  try {
    const id = request.query.id;
    const content = request.query.content;
    if (!id || !content) throw new Error("Id or content missing.");
    const result = await sql`UPDATE Posts SET Content = ${content} WHERE Id = ${id};`;
    // console.log("TEST handler result", result);
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
