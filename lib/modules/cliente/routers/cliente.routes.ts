import { Request, Response } from 'express';
import * as _ from 'lodash';
import Cliente from '../models/cliente.model';

export class ClienteController {

    crearCliente = (req: Request, res: Response) => {
        const nuevaCliente = new Cliente(
            {
                materia: req.body.materia
            }
        );

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
    }

    obtenerClientes = (req: Request, res: Response) => {
        Cliente.find()
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
    }

    actualizarCliente = (req: Request, res: Response) => {
        Cliente.findByIdAndUpdate(req.params.id, {
            materia: req.body.materia
        })
        .then(materiaActualizada => {
            res.status(200).json({
                ok: true,
                materia: materiaActualizada,
                message: 'Cliente actualizada'                
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'Cliente no actualizada'
            });
        });

    }

    eliminarCliente = (req: Request, res: Response) => {
        Cliente.findByIdAndDelete(req.params.id)
        .then(materiaEliminada => {
            res.status(200).json({
                ok: true,
                message: 'Cliente eliminada'
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error,
                message: 'Cliente no eliminada'
            })
        });
    }
}