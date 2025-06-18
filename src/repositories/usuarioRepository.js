import Usuario from "../models/usuarioModel.js";

export async function findAllUsuarios() {
  return await Usuario.findAll();
}

export async function findUsuarioById(id) {
  return await Usuario.findByPk(id);
}

export async function createUsuario({
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
}) {
  return await Usuario.create({
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
  });
}

export async function updateUsuario(
  id,
  { nome, cpf, email, senha, celular, endereco, bairro, cidade, cep, complemento }
) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;

  // Só atualiza a senha se ela for enviada
  const updateFields = {
    nome,
    cpf,
    email,
    celular,
    endereco,
    bairro,
    cidade,
    cep,
    complemento,
  };
  if (senha) {
    updateFields.senha = senha;
  }

  await usuario.update(updateFields);
  return usuario;
}

export async function deleteUsuario(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;

  await usuario.destroy();
  return usuario;
}