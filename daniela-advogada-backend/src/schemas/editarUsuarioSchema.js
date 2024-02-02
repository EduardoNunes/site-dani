const joi = require("joi");

const editarUsuarioSchema = joi.object({
  nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome é obrigatório",
    "string.trim": "O campo nome não pode conter espaços em branco",
  }),
  email: joi.string().email().required().messages({
    "any.required": "Preencha o campo email",
    "string.empty": "Preencha o campo email",
    "string.email": "Email inválido",
    "string.base": "Email inválido",
    "string.trim": "O campo e-mail não pode conter espaços em branco",
  }),
  senha: joi
    .string()
    .min(8)
    .required()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%?&])"))
    .messages({
      "any.required": "O campo senha é obrigatório",
      "string.empty": "O campo senha é obrigatório",
      "string.min": "A senha deve ter no mínimo 8 caracteres",
      "string.trim": "O campo senha não pode conter espaços em branco",
      "string.base": "Insira uma senha válida",
      "string.pattern.base":
        "A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 dos seguintes símbolos: @, $, !, %, ? ou &",
    }),
});

module.exports = editarUsuarioSchema;
