"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = require("../service/multer");
const spreadsheetController_1 = __importDefault(require("../controller/spreadsheetController"));
const multer_2 = __importDefault(require("multer"));
const upload = (0, multer_2.default)(multer_1.config);
const router = (0, express_1.Router)();
router.post("/spread", upload.single("spread"), (req, res) => {
    spreadsheetController_1.default.create(req, res);
});
exports.default = router;
