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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = __importDefault(require("../tests"));
describe("Dado que tengo una funciones para realizar diferentes operaciones", () => {
    let test;
    beforeEach(() => {
        test = new tests_1.default();
    });
    it("deseo garantizar que se ejecute correctamente la función", () => {
        expect(test.funcionOperaciones(1, 2)).toBeTruthy();
    });
    it("deseo garantizar que se llamen la operación de restar", () => __awaiter(void 0, void 0, void 0, function* () {
        const spyResta = jest.spyOn(test, "funcionResta");
        yield test.funcionOperaciones(1, 2);
        expect(spyResta).toBeCalled();
    }));
    it("deseo garantizar que se llamen la operación de sumar", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseSuma = new Promise((resolve, reject) => {
            resolve(4);
        });
        const spySuma = jest
            .spyOn(test, "funcionSuma")
            .mockReturnValue(responseSuma);
        yield test.funcionOperaciones(1, 2);
        expect(spySuma).toBeCalled();
    }));
});
//# sourceMappingURL=tests.spec.js.map