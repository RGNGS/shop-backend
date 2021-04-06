import {Request, Response, Router, Application} from "express";
import {log} from "../utils/logger";
import * as avatar from "../controllers/avatar";

const router = Router();

export default function(app: Application) { 
    router.get("/avatar", async (req: Request, res: Response) => {
        avatar.get(req, res);
    });

    return router;
};

log("INIT", "Loaded routes/avatar.ts");