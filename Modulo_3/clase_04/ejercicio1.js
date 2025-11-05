"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
exports.persona = {
    nombre: "Martin",
    edad: 50,
    ciudad: "CABA"
};
for (var propiedad in exports.persona) {
    console.log("".concat(propiedad, ": ").concat(exports.persona[propiedad]));
}
