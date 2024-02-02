const joi = require("joi");

const cadastrarProcessoSchema = joi.object({
  autor: joi.string().required().messages({
    "any.required": "O campo autor é obrigatório",
    "string.empty": "O campo autor é obrigatório",
  }),
  reu: joi.string().required().messages({
    "any.required": "O campo reu é obrigatório",
    "string.empty": "O campo reu é obrigatório",
  }),
  numero: joi.string().required().messages({
    "any.required": "O campo numero é obrigatório",
    "string.empty": "O campo numero é obrigatório",
  }),
  vara: joi.string().required().messages({
    "any.required": "O campo vara é obrigatório",
    "string.empty": "O campo vara é obrigatório",
  }),
  juiz: joi.string().required().messages({
    "any.required": "O campo juiz é obrigatório",
    "string.empty": "O campo juiz é obrigatório",
  }),
  comarca: joi.string().required().messages({
    "any.required": "O campo comarca é obrigatório",
    "string.empty": "O campo comarca é obrigatório",
  }),
  data_entrada: joi.string().required().messages({
    "any.required": "O campo data_entrada é obrigatório",
    "string.empty": "O campo data_entrada é obrigatório",
  }),
  atualizado: joi.string().required().messages({
    "any.required": "O campo atualizado é obrigatório",
    "string.empty": "O campo atualizado é obrigatório",
  }),
  infos: joi.string().required().messages({
    "any.required": "O campo infos é obrigatório1",
    "string.empty": "O campo infos é obrigatório2",
  }),
  usuarios_id: joi.number().required().messages({
    "any.required": "O campo usuarios_id é obrigatório",
    "number.empty": "O campo usuarios_id é obrigatório",
  }),
});

module.exports = cadastrarProcessoSchema;
