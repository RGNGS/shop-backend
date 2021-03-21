import {Request, Response, Router} from "express";
import {logout} from "../controllers/logout";
import {log} from "../utils/logger";

const router = Router();

export default function(app) { 
    router.get("/logout", (req: Request, res: Response) => {
        logout(req, res);
    });

    return router;
};

log("INIT", "Loaded routes/logout.ts");