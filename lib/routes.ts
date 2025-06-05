import { ClienteRoutes } from "./modules/cliente/routes/cliente.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private clienteRoutes : ClienteRoutes = new ClienteRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.clienteRoutes.routes(app);
    }
}