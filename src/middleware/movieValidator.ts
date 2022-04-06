import { body } from "express-validator";

export function movieValidator() {
  return [
    body('title')
    .isString()
    .withMessage('Insira um titulo valido'),

    body('poster')
      .isURL()
      .withMessage('Insira uma URL valida'),

    body('actors')
      .isArray()
      .withMessage('Insira um array de atores'),

    body('rating')
      .isNumeric()
      .withMessage('Insira uma nota valida')
      .custom((num: number | string) => {
        if (+num < 0 || +num > 10) {
          throw new Error('A nota deve estar entre 1 e 10')
        }

        return true
      }),

    body('description')
      .isString()
      .withMessage('Insira uma descrição valida'),
  
    body('director')
      .isString()
      .withMessage('Insira um nome de diretor valido'),
  ]
}