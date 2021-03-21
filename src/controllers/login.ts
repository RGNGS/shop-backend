import {Request, Response} from "express";
import {log} from "../utils/logger";

function returnUser(req: Request, res: Response) { 
    if (!req.user) {
        res.sendStatus(401);
        return; 
    };

    res.status(200);
    res.json(req.user);
};

function loginSuccess(req: Request, res: Response) {
    if (!req.user) {
        res.sendStatus(401);
        return; 
    };

    res.status(200);
    res.json(req.user);
};

function loginFailure(req: Request, res: Response) {
    res.sendStatus(401);
};

export {returnUser, loginSuccess as success, loginFailure as failure};

log("INIT", "Loaded controllers/login.ts");