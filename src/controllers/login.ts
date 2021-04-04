import {Request, Response} from "express";
import {log} from "../utils/logger";

function loginSuccess(req: Request, res: Response) {
    if (!req.isAuthenticated()) {
        res.status(401);
        res.redirect("/login");
        return; 
    };

    res.status(200);
    res.json(req.user);
};

function loginFailure(req: Request, res: Response) {
    res.sendStatus(401);
};

export {loginSuccess as success, loginFailure as failure};

log("INIT", "Loaded controllers/login.ts");