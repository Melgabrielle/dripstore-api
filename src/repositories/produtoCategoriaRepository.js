import ProdutoCategoria from "../models/produtoCategoriaModel.js";

export async function findAllProdutoCategorias() {
  return await ProdutoCategoria.findAll();
}

export async function findProdutoCategoriaById(id) {
  return await ProdutoCategoria.findByPk(id);
}

export async function createProdutoCategoria({ produto_id, categoria_id }) {
  return await ProdutoCategoria.create({ produto_id, categoria_id });
}

export async function updateProdutoCategoria(id, { produto_id, categoria_id }) {
  const relacao = await ProdutoCategoria.findByPk(id);
  if (!relacao) return null;

  await relacao.update({ produto_id, categoria_id });
  return relacao;
}

export async function deleteProdutoCategoria(id) {
  const relacao = await ProdutoCategoria.findByPk(id);
  if (!relacao) return null;

  await relacao.destroy();
  return relacao;
}