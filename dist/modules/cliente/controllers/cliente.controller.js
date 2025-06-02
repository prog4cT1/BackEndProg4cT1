"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_model_1 = require("../models/cliente.model");
class ClienteController {
    constructor() {
        this.crearCliente = (req, res) => {
            const nuevaCliente = new cliente_model_1.default({
                cliente: req.body.cliente
            });
            nuevaCliente.save()
                .then(clienteCreada => {
                res.status(201).json({
                    ok: true,
                    cliente: clienteCreada,
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
                .then(clientes => {
                res.statu(200).json({
                    ok: true,
                    clientes: clientes
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
                cliente: req.body.cliente
            })
                .then(clienteActualizada => {
                res.status(200).json({
                    ok: true,
                    cliente: clienteActualizada,
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
                .then(clienteEliminada => {
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
//# sourceMappingURL=cliente.controller.js.map