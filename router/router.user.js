import AgregarNuevoUsuario from "../controllers/user.controller.js";
import express from "express";

const router = express.Router()

router.post("/add-users", AgregarNuevoUsuario)

export default router
