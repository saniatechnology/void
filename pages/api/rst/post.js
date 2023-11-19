import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const username = request.query.username;
    const content = request.query.content;
    const date = Date.parse(new Date());
    if (!username || !content) throw new Error("Username or content missing.");
    const result = await sql`INSERT INTO Posts (Username, Content, Date) VALUES (${username}, ${content}, ${date});`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
