const express = require("express");
const router = express.Router();

function validacionGet(req, res, next) {
  if (req.method !== "GET") {
    return res.status(400).send("Invalid http request method");
  }
  next();
}

// Registrar el middleware para todas las rutas definidas en este router
router.use(validacionGet);

router.get("/", function (req, res) {
  res.send("Ruta clientes medium");
});

module.exports = router;
