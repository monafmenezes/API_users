import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userDeleteSelfService from "../../services/users/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const user = await userDeleteSelfService(email);
    return res.status(200).json({ message: "User deleted with sucess!" });
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};

export default userDeleteSelfController;
