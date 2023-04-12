import { Author as AuthorRepository, News as NewsRepository } from "../../models/index.js"
import bcrypt from "bcryptjs";

async function findAllAuthors(request, response) {
    try {
        const authors = await AuthorRepository.findAll({
            include: "news",
            attributes: {
                exclude: ["password"],
            },
        });
        response
            .status(200)
            .json({ message: "Operação bem sucedida!", data: authors });
    } catch (error) {
        console.log("Erro ao recuperar os registros de autores: ", error);
        response
            .status(500)
            .json({ message: "Falha na operação", data: [] });
    }
}

async function findAuthor(request, response) {
    const authorID = request.params.id;
    try {
        const author = await AuthorRepository.findByPk(authorID, {
            include: "news",
            attributes: {
                exclude: ["password"],
            },
        });
        response
            .status(200)
            .json({ message: "Operação bem sucedida!", data: author });
    } catch (error) {
        console.log(`Erro ao recuperar o registro de autor com id ${authorID}: `, error);
        response
            .status(500)
            .json({ message: "Falha na operação", data: {} });
    }
}

async function addAuthor(request, response) {
    try {
        const authorCreated = await AuthorRepository.create(
            {
                name: request.body.name,
                bio: request.body.bio,
                independet: request.body.independent,
                email: request.body.email,
                password: bcrypt.hashSync(request.body.password, 8),
            },
            {
                include: "news",
                attributes: {
                    exclude: ["password"],
                },
            }
        );
        response
            .status(200)
            .json({ message: "Operação bem sucedida!", data: authorCreated });
    } catch (error) {
        console.log("Erro ao criar autor: ", error);
        response
            .status(500)
            .json({ message: "Falha na operação", data: {} });
    }
}

async function uptadeAuthor(request, response) {
    try {
        const authorID = request.params.id;
        await AuthorRepository.update({
            name: request.body.name,
            bio: request.body.bio,
            independet: request.body.independent,
        },
            {
                where: {
                    id: authorID,
                },
            });
        const authorUpdated = await AuthorRepository.findByPk(authorID,
            {
                include: "news",
                attributes: {
                    exclude: ["password"],
                },
            });
        response
            .status(200)
            .json({ message: "Operação bem sucedida!", data: authorUpdated });
    } catch (error) {
        console.log(`Erro ao atualizar o autor com id ${authorID}: `, error);
        response
            .status(500)
            .json({ message: "Falha na operação", data: {} });
    }
}

async function deleteAuthor(request, response) {
    const authorID = request.params.id;
    try {
        await AuthorRepository.destroy({
            where: {
                id: authorID,
            },
        });
        const authorDeleted = await AuthorRepository.findAll(
            {
                include: "news",
                attributes: {
                    exclude: ["password"],
                },
            });
        response
            .status(200)
            .json({ message: "Operação bem sucedida!", data: authorDeleted });
    } catch (error) {
        console.log(`Erro ao tentar excluir o registro de autor com id ${authorID}: `, error);
        response
            .status(500)
            .json({ message: "Falha na operação", data: [] });
    }
}

export default { findAllAuthors, findAuthor, addAuthor, uptadeAuthor, deleteAuthor };