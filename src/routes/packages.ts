import {Request, Response, Router, Application} from "express";
import {log} from "../utils/logger";
import * as packages from "../controllers/packages";

const router = Router();

export default function(app: Application) { 
    router.get("/packages", async (req: Request, res: Response) => {
        let list = await packages.get(req, res); 

        res.json(list);
    });

    return router;
};

log("INIT", "Loaded routes/packages.ts");