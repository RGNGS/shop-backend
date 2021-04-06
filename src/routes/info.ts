import {Request, Response, Router, Application} from "express";
import {log} from "../utils/logger";
import * as info from "../controllers/info";

const router = Router();

export default function(app: Application) { 
    router.get("/info", async (req: Request, res: Response) => {
        info.get(req, res);
    });

    return router;
};

log("INIT", "Loaded routes/info.ts");