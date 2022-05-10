import { Router } from "express";

import productCreateController from "../controllers/product/productCreate.controller"
import productListContoller from "../controllers/product/productList.controller";

const routes = Router()

export const productRoutes = () => {
    routes.post("/", productCreateController)
    routes.get("/", productListContoller)
    return routes
}
