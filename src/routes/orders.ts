import {Request, Response, Router, Application} from "express";
import {log} from "../utils/logger";
import * as orders from "../controllers/orders";

const router = Router();

export default function(app: Application) { 
    router.get("/orders", async (req: Request, res: Response) => {
        orders.get(req, res);
    });

    return router;
};

log("INIT", "Loaded routes/orders.ts");