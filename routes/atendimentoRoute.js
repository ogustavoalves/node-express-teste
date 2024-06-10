const { Router } = require("express");

const router = Router();
const atendimentoController = require("../controllers/atendimentoController");

router.get("/atendimentos", atendimentoController.search);


router.post("/atendimentos", atendimentoController.create);

router.put("/atendimentos/:id", atendimentoController.update);

router.delete("/atendimentos/:id", atendimentoController.delete)

module.exports = router;