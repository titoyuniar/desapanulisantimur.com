import { ErhanesiaException } from "@/utils/backend";
import { NextApiResponse } from "next";

export * from "./API";
export * from "./cookie";
export * from "./recoils";
export * from "./ErhanesiaException";
export const error = async (err: Error, res: NextApiResponse) => {
  if (err instanceof ErhanesiaException) {
    res.status(err.getCode()).send({ message: err.message });
  } else {
    console.log(err);
    res.status(500).send({ message: "Mohon maaf ada kesalahan di sistem kami!" });
  }
  return await Promise.reject({ success: false });
};
