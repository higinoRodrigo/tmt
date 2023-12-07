const typeTemplate = "'${label}' precisa ser do tipo ${type}";

export const defaultValidateMessages = {
  default: "Erro de validação no campo '${label}'",
  required: "O campo '${label}' é obrigatório",
  enum: "'${label}' deve ser um dos [${enum}]",
  whitespace: "'${label}' remova os espaços em branco",
  date: {
    format: "'${label}' formato de data inválido",
    parse: "'${label}' não é uma data válida",
    invalid: "'${label}' data inválida",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${label}' deve ter exatamante ${len} caracteres",
    min: "'${label}' deve ser pelo menos ${min} caracteres",
    max: "'${label}' não pode ser maior que ${max} caracteres",
    range: "'${label}' deve estar entre ${min} e ${max} caracteres",
  },
  number: {
    len: "'${label}' deve ser igual a ${len}",
    min: "'${label}' não pode ser inferior a ${min}",
    max: "'${label}' não pode ser maior que ${max}",
    range: "'${label}' deve estar entre ${min} e ${max}",
  },
  array: {
    len: "'${label}' deve ter exatamante ${len} de tamanho",
    min: "'${label}' não pode ser inferior a ${min} o tamanho",
    max: "'${label}' não pode ser maior que ${max} o tamanho",
    range: "'${label}' deve estar entre ${min} e ${max} de tamanho",
  },
  pattern: {
    mismatch: "'${label}' não corresponde ao padrão ${pattern}",
  },
};