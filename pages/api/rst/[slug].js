import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const slug = request.query.slug;
    // console.log(`TEST slug: ${slug}.`);
    const result = await sql.query(`SELECT * from Posts WHERE Username = '${slug}' ORDER BY date DESC;`);
    // console.log("TEST result", result);
    return response.status(200).json({ posts: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
