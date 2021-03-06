"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tests_1 = __importDefault(require("./files/tests"));
const app = express_1.default();
const port = 3000;
app.get("/", (req, res) => {
    const test = new tests_1.default();
    test.funcionOperaciones(1, 2);
    res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map