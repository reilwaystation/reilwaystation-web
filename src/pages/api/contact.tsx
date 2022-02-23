import { NextApiRequest, NextApiResponse } from "next";

const contact = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log(req.body);

    res.status(200).json("ok");
  } else {
    res.status(405).json({ detail: "method not allowed" });
  }
};

export default contact;
