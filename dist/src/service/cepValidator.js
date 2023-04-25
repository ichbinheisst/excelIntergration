"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "viacep.com.br/ws/01001000/json/";
class ViaCep {
    async fetchZipCode(zipCode) {
        const request = await axios_1.default.get(`https://viacep.com.br/ws//${zipCode}/json/`);
        console.log(request);
        return request.data;
    }
    validate(clientData) {
        for (const key in clientData) {
        }
    }
}
