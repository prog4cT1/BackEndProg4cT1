"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ClienteSchema = new Schema({
    cliente: {
        type: String,
        required: [true, 'cliente required'],
        unique: true
    },
    telefono: {
        type: String,
        required: [true, 'telefono required']
    }
});
const Cliente = mongoose.model("Cliente", ClienteSchema);
exports.default = Cliente;
//# sourceMappingURL=cliente.model.js.map