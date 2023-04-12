import express from "express";
import authorsRoutes from "./authors.js"
import newsRoutes from "./news.js"
import healthRoutes from "./health.js"
import authRoutes from "./auth.js"

const routes = express.Router();

routes.use("/login", authRoutes);
routes.use("/authors", authorsRoutes);
routes.use("/news", newsRoutes);
routes.use("/health", healthRoutes);

export default routes;