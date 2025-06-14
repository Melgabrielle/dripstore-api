import { Router } from "express";
import * as imagemProdutoController from "../controllers/imagemProdutoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, imagemProdutoController.getAllImagemProdutos);
router.get("/:id", authMiddleware, imagemProdutoController.getImagemProdutoById);

export default router;