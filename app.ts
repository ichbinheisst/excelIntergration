import express, { application, Express, Request, Response } from 'express';
import router from './src/router';
import dotenv from 'dotenv';
import cors from 'cors';
class App {
    private allowedOrigins = '*';
    private options: cors.CorsOptions = {
        origin: this.allowedOrigins
    };

    public app: Express;
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()

    }
    middleware() {
        this.app.use(express.json())
        this.app.use(cors(this.options))
        

    }
    routes(): void {
        this.app.use(router)
        
    }
}
export default new App().app