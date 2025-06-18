import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, usuarioController.getAllUsuarios);
router.get("/:id", authMiddleware, usuarioController.getUsuarioById);
router.post("/", authMiddleware, usuarioController.createUsuario);
router.put("/:id", authMiddleware, usuarioController.updateUsuario);
router.delete("/:id", authMiddleware, usuarioController.deleteUsuario);

export default router;