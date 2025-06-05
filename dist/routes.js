"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const cliente_routes_1 = require("./modules/cliente/routes/cliente.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.clienteRoutes = new cliente_routes_1.ClienteRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.clienteRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map