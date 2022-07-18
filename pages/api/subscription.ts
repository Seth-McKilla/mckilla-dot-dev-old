import { sgClient, sgMail } from "lib";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "PUT":
        const { email } = req.body;

        await sgClient.request({
          url: "/v3/marketing/contacts",
          method: "PUT",
          body: {
            contacts: [
              {
                email,
              },
            ],
          },
        });

        await sgMail.send({
          from: "seth@endevrs.dev",
          personalizations: [
            {
              to: [{ email }],
            },
          ],
          templateId: "d-41c37108565849b897aea32681fca7d2",
        });

        return res.status(201).json({ message: "Success" });
      default:
        res.setHeader("Allow", ["PUT"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error?.message });
  }
}
