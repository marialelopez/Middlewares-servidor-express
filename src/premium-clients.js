const express = require("express");
const router = express.Router();

// Middleware para agregar la ruta del request como cabecera
function agregarRuta(req, res, next) {
  // Obtiene la URL del request y la agrega como cabecera "url" en la respuesta
  const urlRequest = req.originalUrl;
  res.header("url", urlRequest);

  next();
}

// Registra el middleware para todas las rutas definidas en este router
router.use(agregarRuta);

router.get("/", function (req, res) {
  res.send("Ruta clientes premium");
});

module.exports = router;
