"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const excelReader_1 = __importDefault(require("../service/excelReader"));
//let x = require("../../sheets/")
class SpreadSheetController {
    async create(req, res) {
        var _a;
        const name = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        if (!name) {
            return res.status(401).end();
        }
        const time = this.getTime();
        const data = this.indexByName(name);
        console.log("new sheet stored k");
        res.json({ data, time });
    }
    indexByName(name) {
        const reader = new excelReader_1.default();
        const data = reader.read("./dist/sheets/" + name);
        return data;
    }
    getTime() {
        const time = new Date();
        const date = time.toDateString();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return { date, hour, minutes, seconds };
    }
    privatestore() {
    }
    index() {
    }
}
exports.default = new SpreadSheetController();
