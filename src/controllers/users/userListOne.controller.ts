import { Request, Response } from "express";
import userListOneService from "../../services/users/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    
    const email = req.userEmail
    const user = await userListOneService(email)
    return res.status(201).send(user)
    
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userListOneController;
