import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IProduct } from "../../interfaces/product";
import productCreateService from "../../services/product/productCreate.service";

const produtctCreateController = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const product: IProduct = await productCreateService({
      name,
      description,
      price,
    });

    return res.status(201).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default productCreateService;