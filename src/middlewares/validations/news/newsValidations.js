import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const newsValidations = [ 
    body("titulo")
        .isString()
        .withMessage("Valor inválido."),

    body("conteudo")
        .isString()
        .withMessage("Valor inválido."),

    body("categoria")
        .isString()
        .withMessage("Valor inválido."),
    
    body("author_id")
        .isNumeric()
        .withMessage("Valor inválido."),

    verifyBodyFieldsErros,
    
];

export default newsValidations;