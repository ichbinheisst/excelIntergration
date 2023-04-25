import { Router, Request, Response } from "express"
import { config } from "../service/multer";
import SpreadsheetController from "../controller/spreadsheetController";
import multer from 'multer'


const upload = multer(config);



const router = Router();


router.post("/spread", upload.single("spread"), (req: Request, res: Response) => {
    SpreadsheetController.create(req, res)
})

export default router;