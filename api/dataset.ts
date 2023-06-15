import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const page = request.query.page ?? "1";

  const fakeData = Array.from({ length: 3 }).map(
    (_, index) =>
      `${page}_${index}_${Math.floor(Math.random() * 1e6).toString(16)}`
  );

  response.status(200).json(fakeData);
}
