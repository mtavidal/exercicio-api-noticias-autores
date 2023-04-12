import { validationResult } from "express-validator";

function verifyBodyFieldsErros(request, response, next) {
    const erros = validationResult(request);

    if (!erros.isEmpty()) {
        return response.status(400).json({
            message: 'Falha na operação',
            data: erros.array(),
        });
    }

    next();
}

export default verifyBodyFieldsErros;