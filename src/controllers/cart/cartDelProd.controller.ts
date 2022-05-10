import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import cartDelProdService from "../../services/cart/cartDelProd.service";

const cartDelProdController = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params;
    const { userEmail } = req;

    const cartDel = await cartDelProdService(userEmail, product_id);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};


export default cartDelProdController;