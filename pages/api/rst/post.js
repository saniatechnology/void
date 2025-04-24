import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from "uuid";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { username, content } = request.body;
    const date = Date.parse(new Date());
    const id = uuidv4();
    if (!username || !content) throw new Error("Username or content missing.");
    const result = await sql`INSERT INTO Posts (Username, Content, Date, Id) VALUES (${username}, ${content}, ${date}, ${id});`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
