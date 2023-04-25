"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.config = {
    storage: multer_1.default.diskStorage({
        destination: path_1.default.resolve(__dirname, "..", "..", "sheets"),
        filename: (req, file, callBack) => {
            const ext = path_1.default.extname(file.originalname);
            const name = path_1.default.basename(file.originalname, ext);
            callBack(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};
