import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";
import { IProductCreate } from "../../interfaces/product";

const productCreateService = async ({
  name,
  description,
  price,
}: IProductCreate) => {
  const productRepository = AppDataSource.getRepository(Product);
     
  const productAlreadyExists = await productRepository.findOne({
//  onde eu tiver name
    where: { name },
  });

  if (productAlreadyExists) {
    throw new AppError(409, "Product  Already Registered");
  }

  const product = new Product();
  product.name = name;
  product.description = description;
  product.price = price;

  productRepository.create(product);
  productRepository.save(product);

  return product;
};

export default productCreateService;
