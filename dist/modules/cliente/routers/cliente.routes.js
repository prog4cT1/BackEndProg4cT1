"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_model_1 = require("../models/cliente.model");
class ClienteController {
    constructor() {
        this.crearCliente = (req, res) => {
            const nuevaCliente = new cliente_model_1.default({
                materia: req.body.materia
            });
            nuevaCliente.save()
                .then(materiaCreada => {
                res.status(201).json({
                    ok: true,
                    materia: materiaCreada,
                    message: 'Cliente creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.obtenerClientes = (req, res) => {
            cliente_model_1.default.find()
                .then(materias => {
                res.statu(200).json({
                    ok: true,
                    materias: materias
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarCliente = (req, res) => {
            cliente_model_1.default.findByIdAndUpdate(req.params.id, {
                materia: req.body.materia
            })
                .then(materiaActualizada => {
                res.status(200).json({
                    ok: true,
                    materia: materiaActualizada,
                    message: 'Cliente actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Cliente no actualizada'
                });
            });
        };
        this.eliminarCliente = (req, res) => {
            cliente_model_1.default.findByIdAndDelete(req.params.id)
                .then(materiaEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Cliente eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error,
                    message: 'Cliente no eliminada'
                });
            });
        };
    }
}
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.routes.js.map