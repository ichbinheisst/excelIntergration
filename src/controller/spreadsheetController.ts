
import { Request, Response } from "express";
import * as fs from 'fs'
import path from "path"
import ExcelReader from "../service/excelReader";

type excelResponse = {
    t: string,
    v: string,
    r?: string,
    h?: string,
    w?: string

}


//let x = require("../../sheets/")

class SpreadSheetController {

    async create(req: Request, res: Response) {
        const name = req.file?.filename
        if (!name) {
            return res.status(401).end();
        }
        const time  =  this.getTime()
        const data = this.indexByName(name)
         console.log("new sheet stored k")
        res.json({ data, time })
    }

    private indexByName(name: string) {
        const reader = new ExcelReader()
        const data = reader.read("./dist/sheets/" + name)
        return data

    }


     private getTime(){
        const time= new Date()
        const date = time.toDateString()
        const hour = time.getHours()
        const minutes = time.getMinutes();
        const seconds = time.getSeconds()
         return { date , hour , minutes, seconds} 
     

     }

     privatestore() {

    }

    index() {

    }

}


export default new SpreadSheetController()