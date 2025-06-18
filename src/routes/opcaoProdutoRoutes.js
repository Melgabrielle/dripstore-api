import { Router } from "express";
import * as opcaoProdutoController from "../controllers/opcaoProdutoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, opcaoProdutoController.getAllOpcoesProduto);
router.get("/:id", authMiddleware, opcaoProdutoController.getOpcaoProdutoById);
router.post("/", authMiddleware, opcaoProdutoController.createOpcaoProduto);
router.put("/:id", authMiddleware, opcaoProdutoController.updateOpcaoProduto);
router.delete("/:id", authMiddleware, opcaoProdutoController.deleteOpcaoProduto);

export default router;
