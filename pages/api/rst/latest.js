import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const result = await sql.query(`SELECT * from Posts ORDER BY date DESC;`);
    return response.status(200).json({ posts: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
