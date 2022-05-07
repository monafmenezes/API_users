import { Request, Response } from "express";
import userDeleteSelfService from "../../services/users/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const user = await userDeleteSelfService(email);
    return res.status(200).json({ message: "User deleted with sucess!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userDeleteSelfController;
