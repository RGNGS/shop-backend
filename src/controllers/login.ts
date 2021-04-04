import {Request, Response} from "express";
import {log} from "../utils/logger";

function logout(req: Request, res: Response) {
    req.logout();
    res.redirect("/");
};

function user(req: Request, res: Response) {
    if (!req.user) {
        res.sendStatus(401);
        return; 
    };

    res.status(200);
    res.json(req.user);
};

export {user, logout};

log("INIT", "Loaded controllers/login.ts");