"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Tests {
    constructor() {
        console.log("construcción test");
    }
    funcionOperaciones(numero1, numero2) {
        return __awaiter(this, void 0, void 0, function* () {
            const suma = yield this.funcionSuma(numero1, numero2);
            const resta = yield this.funcionResta(numero1, numero2);
            console.log({ suma });
            console.log({ resta });
            return true;
        });
    }
    funcionSuma(numero1, numero2) {
        return __awaiter(this, void 0, void 0, function* () {
            return numero1 + numero2;
        });
    }
    funcionResta(numero1, numero2) {
        return __awaiter(this, void 0, void 0, function* () {
            return numero1 - numero2;
        });
    }
}
exports.default = Tests;
//# sourceMappingURL=tests.js.map