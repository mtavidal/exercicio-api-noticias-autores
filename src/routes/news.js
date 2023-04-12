import express from "express";
import newsController from "../controllers/news/newsController.js";
import newsValidations from "../middlewares/validations/news/newsValidations.js";

const routes = express.Router();


routes.get("/", newsController.findAllNews);
routes.get("/:id", newsController.findNews);
routes.post("/", newsValidations, newsController.createNews);
routes.put("/:id", newsValidations, newsController.uptadeNews);
routes.delete("/:id", newsController.deleteNews);


export default routes;