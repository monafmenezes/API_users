import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { fixedFloat } from "../../utils";
import { Cart } from "../../entities/cart.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";

const cartAddProdService = async (product_id: string, userEmail: string) => {
  const useRepository = AppDataSource.getRepository(User);

  const user = await useRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = await cartRepository.findOne({
    where: {
      id: user?.cart.id,
    },
  });

  const productRepository = AppDataSource.getRepository(Product);

  const productToAdd = await productRepository.findOne({
    where: {
      id: product_id,
    },
  });

  if (!productToAdd) {
    throw new AppError(404, "Product not found");
  }

  if (cart && productToAdd) {
    if (
      cart.product.filter((prod) => prod.name === productToAdd.name).length > 0
    ) {
      throw new AppError(406, "Product is already in the cart");
    }

    cart.product = [...cart.product, productToAdd];
    cart.subtotal = fixedFloat(cart.subtotal + productToAdd.price);

    await cartRepository.save(cart);
    return cart;
  }
};

export default cartAddProdService;