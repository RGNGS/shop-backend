import {Request, Response} from "express";
import {log} from "../utils/logger";
import packages from "../config/packages.json";

async function getPackages(req: Request, res: Response) {
    res.json(packages);
};

export {getPackages as get};

log("INIT", "Loaded controllers/packages.ts");