import { sql } from "@vercel/postgres";
export default async function handler(request, response) {
  try {
    const id = request.query.id;
    if (!id) throw new Error("Id is missing.");
    const result = await sql`DELETE FROM Posts WHERE Id = ${id};`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
