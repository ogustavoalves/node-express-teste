const atendimentoModel = require('../models/atendimentoModel');

class atendimentoController {

    search() {
        return atendimentoModel.toList();
    }

    create() {
        return atendimentoModel.toCreate();
    }

    update(atendimentoAtualizado, id) {
        return atendimentoModel.toUpdate(atendimentoAtualizado, id);
    }

    delete(id) {
        return atendimentoModel.toDelete(id);
    }
 }

module.exports = new atendimentoController();