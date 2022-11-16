import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

// function getMultipleRandom(arr: any, num: number) {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());

//   return shuffled.slice(0, num);
// }

export default async function handler(req: any, res: NextApiResponse) {
  const { q } = req.query;
  try {
    const dataName = await prisma.restaurant.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
      include: {
        category: true,
        featureImage: {
          select: { URL: true },
        },
        rating: true,
      },
    });
    const dataCategory = await prisma.restaurant.findMany({
      where: {
        category: {
          some: {
            categoryName: {
              in: q,
              mode: "insensitive",
            },
          },
        },
      },
      include: {
        category: true,
        featureImage: {
          select: { URL: true },
        },
        rating: true,
      },
    });
    const data = [...dataName, ...dataCategory];
    res.send(data);
    res.status(200);
    res.end();
  } catch (e) {
    res.status(404);
    console.log(e);
  }
}
