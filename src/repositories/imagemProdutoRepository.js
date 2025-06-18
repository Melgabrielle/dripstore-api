import ImagemProduto from "../models/imagemProdutoModel.js";
import Produto from "../models/produtoModel.js";

export async function findAllImagemProdutos() {
  return await ImagemProduto.findAll({
    include: {
      model: Produto,
      as: "produto",
      attributes: ["id", "nome"],
    },
  });
}

export async function findImagemProdutoById(id) {
  return await ImagemProduto.findByPk(id, {
    include: {
      model: Produto,
      as: "produto",
      attributes: ["id", "nome"],
    },
  });
}

export async function createImagemProduto({ produto_id, path }) {
  return await ImagemProduto.create({ produto_id, path });
}