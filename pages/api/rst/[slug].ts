import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    const slug = request.query.slug as string;
    const result = await sql.query(`SELECT * from Posts WHERE Username = '${slug}' ORDER BY date DESC;`);
    return response.status(200).json({ posts: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
