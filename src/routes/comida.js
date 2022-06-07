const express = require("express");
const router = express.Router();
const comidaControllers = require("../controllers/comidaControllers");

// Obtener todas las comidas
router.get("/comida", comidaControllers.obtenerComidas);
// Obtener una comida por id
router.get("/comida/:id", comidaControllers.obtenerUnaComida);
// Agregar una comida
router.post("/comida", comidaControllers.agregarComida);
// Eliminar una comida
router.delete("/comida/:id", comidaControllers.eliminarComida);
// Editar una comida
router.put("/comida/:id", comidaControllers.editarComida);

module.exports = router;
