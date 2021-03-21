import {Request, Response} from "express";
import {log} from "../utils/logger";

function logout(req: Request, res: Response) {
    req.logout();
    res.redirect("/");
};

export {logout}

log("INIT", "Loaded controllers/logout.ts");