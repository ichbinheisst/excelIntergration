"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = __importDefault(require("xlsx"));
class ExcelReader {
    getXLXS(file) {
        const workbook = xlsx_1.default.readFile(file);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        return worksheet;
    }
    determineLenght(worksheet) {
        const data = [];
        for (const key in worksheet) {
            const column = +key.split("").splice(1, 2).join();
            if (!isNaN(column) && !data.some((d) => d == column)) {
                data.push(column);
            }
        }
        return data.length;
    }
    determineColumn(worksheet) {
        const columns = [];
        for (const key in worksheet) {
            const letter = key.split("")[0];
            if (!columns.some((item) => item == letter) && !letter.includes("!")) {
                columns.push(letter);
            }
        }
        return columns;
    }
    read(file) {
        const worksheet = this.getXLXS(file);
        const rows = this.determineLenght(worksheet);
        const response = [];
        for (let index = 2; index <= rows; index++) {
            const element = {
                [worksheet["A" + 1].v]: worksheet["A" + index].v,
                [worksheet["B" + 1].v]: worksheet["B" + index].v,
                [worksheet["C" + 1].v]: worksheet["C" + index].v,
                [worksheet["D" + 1].v]: worksheet["D" + index].v,
            };
            response.push(element);
        }
        return response;
    }
}
exports.default = ExcelReader;
