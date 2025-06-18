import * as imagemProdutoRepository from "../repositories/imagemProdutoRepository.js";

// Buscar todas as imagens
export async function getAllImagemProdutos(req, res) {
  try {
    const imagens = await imagemProdutoRepository.findAllImagemProdutos();
    return res.json(imagens);
  } catch (error) {
    console.error("Erro ao buscar imagem do produto:", error);
    return res.status(500).json({ message: "Erro ao buscar imagem do produto." });
  }
}

// Buscar imagem por ID
export async function getImagemProdutoById(req, res) {
  const { id } = req.params;

  try {
    const imagem = await imagemProdutoRepository.findImagemProdutoById(id);

    if (!imagem) {
      return res.status(404).json({ message: "Imagem do produto não encontrada." });
    }

    return res.json(imagem);
  } catch (error) {
    console.error("Erro ao buscar imagem do produto:", error);
    return res.status(500).json({ message: "Erro ao buscar imagem do produto." });
  }
}

// Criar nova imagem de produto
export async function createImagemProduto(req, res) {
  const { produto_id, path } = req.body;

  try {
    const imagem = await imagemProdutoRepository.createImagemProduto({ produto_id, path });
    return res.status(201).json(imagem);
  } catch (error) {
    console.error("Erro ao criar imagem do produto:", error);
    return res.status(400).json({ message: "Erro ao criar imagem do produto." });
  }
}
