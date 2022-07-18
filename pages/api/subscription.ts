import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = "https://api.sendgrid.com";

  try {
    switch (req.method) {
      case "PUT":
        const { email } = req.body;

        const subscribeResponse = await fetch(
          `${baseUrl}/v3/marketing/contacts`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            },
            body: JSON.stringify({
              contacts: [
                {
                  email,
                },
              ],
            }),
          }
        );

        if (!subscribeResponse.ok) {
          throw new Error(subscribeResponse.statusText);
        }

        const emailResponse = await fetch(`${baseUrl}/v3/mail/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          },
          body: JSON.stringify({
            from: "seth@endevrs.dev",
            personalizations: [
              {
                to: [
                  {
                    email,
                  },
                ],
              },
            ],
            template_id: "d-41c37108565849b897aea32681fca7d2",
          }),
        });

        if (!emailResponse.ok) {
          throw new Error(emailResponse.statusText);
        }

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
