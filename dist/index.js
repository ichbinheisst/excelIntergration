"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//const x   =   fetchData("04812310")
const port = process.env.PORT ? process.env.PORT : 3333;
app_1.default.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
/*

*/