import { Express } from "express";
import {
    updateCount,
    getCount
} from "../controller/admin.controler";


export default (app: Express) => {
    app.post('/updateCount', updateCount);
    app.get('/getCount', getCount);
}