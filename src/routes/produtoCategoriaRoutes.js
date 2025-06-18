import { Router } from "express";
import * as produtoCategoriaController from "../controllers/produtoCategoriaController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, produtoCategoriaController.getAllProdutoCategorias);
router.get("/:id", authMiddleware, produtoCategoriaController.getProdutoCategoriaById);
router.post("/", authMiddleware, produtoCategoriaController.createProdutoCategoria);
router.put("/:id", authMiddleware, produtoCategoriaController.updateProdutoCategoria);
router.delete("/:id", authMiddleware, produtoCategoriaController.deleteProdutoCategoria);

export default router;