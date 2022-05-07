import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller";
import userUpdatePasswordController from "../controllers/users/userUpdatePassword.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users", authUser, userListController);
routes.get("/users/me", authUser, userListOneController);
routes.delete("/users/me", authUser, userDeleteSelfController);
routes.patch(
  "/users/me/updatePassword",
  authUser,
  userUpdatePasswordController
);

export default routes;
