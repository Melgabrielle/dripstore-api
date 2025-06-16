import Categoria from "../models/categoriaModel.js";

export async function findAllCategorias() {
  return await Categoria.findAll();
}

export async function findCategoriaById(id) {
  return await Categoria.findByPk(id);
}

// Corrija esta função:
export async function createCategoria({ nome, slug }) {
  return await Categoria.create({ nome, slug });
}

export async function updateCategoria(id, { nome }) {
  const categoria = await Categoria.findByPk(id);
  if (!categoria) return null;

  await categoria.update({ nome });
  return categoria;
}

export async function deleteCategoria(id) {
  const categoria = await Categoria.findByPk(id);
  if (!categoria) return null;

  await categoria.destroy();
  return categoria;
}