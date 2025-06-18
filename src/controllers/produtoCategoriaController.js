import * as produtoCategoriaRepository from "../repositories/produtoCategoriaRepository.js";

// Buscar todas as relações produto-categoria
export async function getAllProdutoCategorias(req, res) {
  try {
    const relacoes = await produtoCategoriaRepository.findAllProdutoCategorias();
    return res.json(relacoes);
  } catch (error) {
    console.error("Erro ao buscar relações produto-categoria:", error);
    return res.status(500).json({ message: "Erro ao buscar relações produto-categoria." });
  }
}

// Buscar relação produto-categoria por ID
export async function getProdutoCategoriaById(req, res) {
  const { id } = req.params;
  try {
    const relacao = await produtoCategoriaRepository.findProdutoCategoriaById(id);
    if (!relacao) {
      return res.status(404).json({ message: "Relação produto-categoria não encontrada." });
    }
    return res.json(relacao);
  } catch (error) {
    console.error("Erro ao buscar relação produto-categoria:", error);
    return res.status(500).json({ message: "Erro ao buscar relação produto-categoria." });
  }
}

// Criar nova relação produto-categoria
export async function createProdutoCategoria(req, res) {
  const { produto_id, categoria_id } = req.body;
  try {
    const relacao = await produtoCategoriaRepository.createProdutoCategoria({ produto_id, categoria_id });
    return res.status(201).json(relacao);
  } catch (error) {
    console.error("Erro ao criar relação produto-categoria:", error);
    return res.status(400).json({ message: "Erro ao criar relação produto-categoria." });
  }
}

// Atualizar relação produto-categoria
export async function updateProdutoCategoria(req, res) {
  const { id } = req.params;
  const { produto_id, categoria_id } = req.body;
  try {
    const relacao = await produtoCategoriaRepository.updateProdutoCategoria(id, { produto_id, categoria_id });
    if (!relacao) {
      return res.status(404).json({ message: "Relação produto-categoria não encontrada." });
    }
    return res.json(relacao);
  } catch (error) {
    console.error("Erro ao atualizar relação produto-categoria:", error);
    return res.status(400).json({ message: "Erro ao atualizar relação produto-categoria." });
  }
}

// Deletar relação produto-categoria
export async function deleteProdutoCategoria(req, res) {
  const { id } = req.params;
  try {
    const relacao = await produtoCategoriaRepository.deleteProdutoCategoria(id);
    if (!relacao) {
      return res.status(404).json({ message: "Relação produto-categoria não encontrada." });
    }
    return res.json({ message: "Relação produto-categoria deletada com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar relação produto-categoria:", error);
    return res.status(500).json({ message: "Erro ao deletar relação produto-categoria." });
  }
}