import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller";
import userUpdatePasswordController from "../controllers/users/userUpdatePassword.controller";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", userCreateController);
  routes.post("/login", userLoginController);
  routes.get("/", authUser, userListController);
  routes.get("/me", authUser, userListOneController);
  routes.delete("/me", authUser, userDeleteSelfController);
  routes.patch(
    "//me/updatePassword",
    authUser,
    userUpdatePasswordController
  );

  return routes;
};

