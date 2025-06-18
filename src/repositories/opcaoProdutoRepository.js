import OpcaoProduto from "../models/opcaoProdutoModel.js";

export async function findAllOpcoesProduto() {
  return await OpcaoProduto.findAll();
}

export async function findOpcaoProdutoById(id) {
  return await OpcaoProduto.findByPk(id);
}

export async function createOpcaoProduto({ produto_id, title, type = "text", values }) {
  return await OpcaoProduto.create({ produto_id, title, type, values });
}

export async function updateOpcaoProduto(id, { produto_id, title, type = "text", values }) {
  const opcao = await OpcaoProduto.findByPk(id);
  if (!opcao) return null;

  await opcao.update({ produto_id, title, type, values });
  return opcao;
}

export async function deleteOpcaoProduto(id) {
  const opcao = await OpcaoProduto.findByPk(id);
  if (!opcao) return null;

  await opcao.destroy();
  return opcao;
}