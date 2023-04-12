import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const authorsValidations = [ 
    body("name")
        .isString()
        .withMessage("Valor inválido."),

    body("bio")
        .isString()
        .withMessage("Valor inválido."),

    body("email")
        .isEmail()
        .withMessage("Valor inválido."),
    
    body("password")
        .isLength({min:8})
        .withMessage("A senha deve ser informada (min: 8 caracteres)"),

    verifyBodyFieldsErros,
    
];

export default authorsValidations;