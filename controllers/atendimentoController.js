const atendimentoModel = require('../models/atendimentoModel');

class atendimentoController {

    search(req, res) {
        const listaAtendimentos = atendimentoModel.toList();

        listaAtendimentos
        .then((atendimentos) => res.status(200).json(atendimentos))
        .catch((error) => res.status(400).json(error.message));
    }

    create(req, res) {
        const novoAtendimento = req.body;
        const atendimento = atendimentoModel.toCreate(novoAtendimento);

        atendimento
        .then((atendimentoCriado) => res.status(201).json(atendimentoCriado))
        .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const atendimentoAtualizado = req.body;
        const { id } = req.params;

        const atendimento = atendimentoModel.toUpdate(atendimentoAtualizado, id);
        return atendimento
        .then((updateAtendimento) => res.status(200).json(updateAtendimento))
        .catch((error) => res.status(400).json(error.message))
    }

    delete(req, res) {
        const { id } = req.params;

        const answer = atendimentoModel.toDelete(id);
        answer.then((answerDelete) => res.status(200).json(answerDelete))
        .catch((error) => res.status(400).json(error.message));
    }
    
 }

module.exports = new atendimentoController();