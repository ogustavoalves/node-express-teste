const { Router } = require("express");

const router = Router();
const atendimentoController = require("../controllers/atendimentoController");

router.get("/atendimentos", (req, res) => {
    const listaAtendimentos = atendimentoController.search();
    listaAtendimentos
    .then((atendimentos) => res.status(200).json(atendimentos))
    .catch((error) => res.status(400).json(error.message))
});

router.post("/atendimentos", (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.create(novoAtendimento);
    atendimento.then((atendimentoCriado) => res.status(201).json(atendimentoCriado)).catch((error) => res.status(400).json(error.message));
});

router.put("/atendimentos/:id", (req, res) => {
    const atendimentoAtualizado = req.body;
    const { id } = req.params;

    const atendimento = atendimentoController.update(atendimentoAtualizado, id);
    atendimento
    .then((updateAtendimento) => res.status(200).json(updateAtendimento))
    .catch((error) => res.status(400).json(error.message))
});

router.delete("/atendimentos/:id", (req, res) => {
    const { id } = req.params;

    const answer = atendimentoController.delete(id);
    answer.then((answerDelete) => res.status(200).json(answerDelete))
    .catch((error) => res.status(400).json(error.message));
})

module.exports = router;