import { Router } from "express";

import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import pagamentoRoutes from "./pagamentoRoutes.js";
import pedidoItemRoutes from "./pedidoItemRoutes.js";
import authRoutes from "./authRoutes.js";
import imagemProdutoRoutes from "./imagemProdutoRoutes.js";
//import opcaoProduto from "./opcaoProdutoRoutes.js";
//import produtoCategoria from "./produtoCategoriaRoutes.js";
//import Usuario from "./usuarioRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/clientes", clienteRoutes);
router.use("/enderecos", enderecoRoutes);
router.use("/categorias", categoriaRoutes);
router.use("/produtos", produtoRoutes);
router.use("/pedidos", pedidoRoutes);
router.use("/pagamentos", pagamentoRoutes);
router.use("/pedido-itens", pedidoItemRoutes);
router.use("/imagem-produtos", imagemProdutoRoutes);
//router.use("/opcao-produtos", opcaoProdutoRoutes);
//router.use("/produto-categoria", produtoCategoriaRoutes);   
//router.use("/usuarios", usuarioRoutes);

export default router;
