import Usuario from "../models/usuarioModel.js";

export async function findUserByEmail(email) {
  return await Usuario.findOne({ where: { email } });
}

export async function findUserById(id) {
  return await Usuario.findByPk(id, { attributes: ["id", "nome", "email"] });
}

export async function createUser({ primeiroNome, sobrenome, email, senhaHash }) {
  return await Usuario.create({
    primeiroNome,
    sobrenome,
    email,
    senha: senhaHash,
  });
}