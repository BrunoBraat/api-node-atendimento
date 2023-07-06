const { Router } = require("express");
const router = Router();

//get post put delete
router.get("/atendimento", (req, resp) => {
    resp.send("Metodo GET")
});

router.post("/atendimento", (req, resp) => {
    resp.send("Metodo POST")
});

router.put("/atendimento/:id", (req, resp) => {
    const { id } = req.params;
    resp.send('Metodo PUT' + id)
});

router.delete('/atendimento:id', (req, resp) => {
    const { id } = req.params;
    resp.send("Metodo DELETE" + id)
});

module.exports = router;