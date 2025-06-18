import * as opcaoProdutoRepository from "../repositories/opcaoProdutoRepository.js";

// Buscar todas as opções de produto
export async function getAllOpcoesProduto(req, res) {
  try {
    const opcoes = await opcaoProdutoRepository.findAllOpcoesProduto();
    return res.json(opcoes);
  } catch (error) {
    console.error("Erro ao buscar opções de produto:", error);
    return res.status(500).json({ message: "Erro ao buscar opções de produto." });
  }
}

// Buscar opção de produto por ID
export async function getOpcaoProdutoById(req, res) {
  const { id } = req.params;
  try {
    const opcao = await opcaoProdutoRepository.findOpcaoProdutoById(id);
    if (!opcao) {
      return res.status(404).json({ message: "Opção de produto não encontrada." });
    }
    return res.json(opcao);
  } catch (error) {
    console.error("Erro ao buscar opção de produto:", error);
    return res.status(500).json({ message: "Erro ao buscar opção de produto." });
  }
}

// Criar nova opção de produto
export async function createOpcaoProduto(req, res) {
  const { produto_id, title, type, values } = req.body;
  try {
    const opcao = await opcaoProdutoRepository.createOpcaoProduto({ produto_id, title, type, values });
    return res.status(201).json(opcao);
  } catch (error) {
    console.error("Erro ao criar opção de produto:", error);
    return res.status(400).json({ message: "Erro ao criar opção de produto." });
  }
}

// Atualizar opção de produto
export async function updateOpcaoProduto(req, res) {
  const { id } = req.params;
  const { produto_id, title, type, values } = req.body;
  try {
    const opcao = await opcaoProdutoRepository.updateOpcaoProduto(id, { produto_id, title, type, values });
    if (!opcao) {
      return res.status(404).json({ message: "Opção de produto não encontrada." });
    }
    return res.json(opcao);
  } catch (error) {
    console.error("Erro ao atualizar opção de produto:", error);
    return res.status(400).json({ message: "Erro ao atualizar opção de produto." });
  }
}

// Deletar opção de produto
export async function deleteOpcaoProduto(req, res) {
  const { id } = req.params;
  try {
    const opcao = await opcaoProdutoRepository.deleteOpcaoProduto(id);
    if (!opcao) {
      return res.status(404).json({ message: "Opção de produto não encontrada." });
    }
    return res.json({ message: "Opção de produto deletada com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar opção de produto:", error);
    return res.status(500).json({ message: "Erro ao deletar opção de produto." });
  }
}