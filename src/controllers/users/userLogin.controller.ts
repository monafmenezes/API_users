import { Request, Response } from "express";
import userLoginService from "../../services/users/userLogin.service";

const UserLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await userLoginService({ email, password });

    return res.status(201).json(token)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default UserLoginController;
