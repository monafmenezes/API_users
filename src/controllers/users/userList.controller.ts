import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListService from "../../services/users/userList.service";

const userListController = async (req: Request, res: Response) => {
  try {
    const userList = await userListService();
    return res.status(201).send(userList);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userListController;
