const joi = require("joi");

const loginUsuarioSchema = joi.object({
  email: joi.required().messages({
    "any.required": "Email e/ou senha inválido(s)!",
    "string.empty": "Email e/ou senha inválido(s)!",
    "string.email": "Email e/ou senha inválido(s)!",
    "string.base": "Email e/ou senha inválido(s)!",
    "string.trim": "O campo e-mail não pode conter espaços em branco",
  }),
  senha: joi.string().min(8).required().messages({
    "any.required": "Email e/ou senha inválido(s)!1",
    "string.empty": "Email e/ou senha inválido(s)!2",
    "string.base": "Email e/ou senha inválido(s)!3",
    "string.min": "Email e/ou senha inválido(s)!4",
  }),
  tipoCadastro: joi.required(),
});

module.exports = loginUsuarioSchema;
