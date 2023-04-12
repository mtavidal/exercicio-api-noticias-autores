import express from "express";
import authorsController from "../controllers/authors/authorsController.js";
import verifyToken from "../middlewares/auth/verifyToken.js";
import authorsValidations from "../middlewares/validations/authors/authorsValidations.js";

const routes = express.Router();

routes.get("/", authorsController.findAllAuthors);
routes.get("/:id", verifyToken, authorsController.findAuthor);
routes.post("/", authorsValidations, authorsController.addAuthor);
routes.put("/:id", verifyToken, authorsValidations, authorsController.uptadeAuthor);
routes.delete("/:id", authorsController.deleteAuthor);

export default routes;