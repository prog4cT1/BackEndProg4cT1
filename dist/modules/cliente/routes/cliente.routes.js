"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoutes = void 0;
const cliente_controller_1 = require("../controllers/cliente.controller");
class ClienteRoutes {
    constructor() {
        this.clienteController = new cliente_controller_1.ClienteController();
    }
    routes(app) {
        app.route('/cliente')
            .get(this.clienteController.obtenerClientes)
            .post(this.clienteController.crearCliente);
        app.route('/cliente/:id')
            .put(this.clienteController.actualizarCliente)
            .delete(this.clienteController.eliminarCliente);
    }
}
exports.ClienteRoutes = ClienteRoutes;
//# sourceMappingURL=cliente.routes.js.map