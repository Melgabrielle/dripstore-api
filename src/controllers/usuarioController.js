import * as usuarioRepository from "../repositories/usuarioRepository.js";
import bcrypt from "bcrypt";

// Buscar todos os usuários (NÃO retornar senha)
export async function getAllUsuarios(req, res) {
  try {
    const usuarios = await usuarioRepository.findAllUsuarios();
    // Remover o campo senha das respostas
    const usuariosSemSenha = usuarios.map(({ dataValues }) => {
      const { senha, ...rest } = dataValues;
      return rest;
    });
    return res.json(usuariosSemSenha);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return res.status(500).json({ message: "Erro ao buscar usuários." });
  }
}

// Buscar usuário por ID (NÃO retornar senha)
export async function getUsuarioById(req, res) {
  const { id } = req.params;
  try {
    const usuario = await usuarioRepository.findUsuarioById(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    const { senha, ...usuarioSemSenha } = usuario.dataValues;
    return res.json(usuarioSemSenha);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return res.status(500).json({ message: "Erro ao buscar usuário." });
  }
}

// Criar novo usuário (hash da senha)
export async function createUsuario(req, res) {
  const {
    nome,
    cpf,
    email,
    senha,
    celular,
    endereco,
    bairro,
    cidade,
    cep,
    complemento,
  } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const usuario = await usuarioRepository.createUsuario({
      nome,
      cpf,
      email,
      senha: senhaHash,
      celular,
      endereco,
      bairro,
      cidade,
      cep,
      complemento,
    });
    const { senha: _, ...usuarioSemSenha } = usuario.dataValues;
    return res.status(201).json(usuarioSemSenha);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res.status(400).json({ message: "Erro ao criar usuário." });
  }
}

// Atualizar usuário (hash da senha se enviada)
export async function updateUsuario(req, res) {
  const { id } = req.params;
  let {
    nome,
    cpf,
    email,
    senha,
    celular,
    endereco,
    bairro,
    cidade,
    cep,
    complemento,
  } = req.body;

  try {
    // Só faz hash se senha for enviada
    let senhaHash = undefined;
    if (senha) {
      senhaHash = await bcrypt.hash(senha, 10);
    }
    const usuario = await usuarioRepository.updateUsuario(id, {
      nome,
      cpf,
      email,
      senha: senhaHash,
      celular,
      endereco,
      bairro,
      cidade,
      cep,
      complemento,
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    const { senha: _, ...usuarioSemSenha } = usuario.dataValues;
    return res.json(usuarioSemSenha);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return res.status(400).json({ message: "Erro ao atualizar usuário." });
  }
}

// Deletar usuário
export async function deleteUsuario(req, res) {
  const { id } = req.params;

  try {
    const usuario = await usuarioRepository.deleteUsuario(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    return res.status(500).json({ message: "Erro ao deletar usuário." });
  }
}