import {Request, Response} from "express";
import {log} from "../utils/logger";
import {getRepository} from "typeorm";
import {Package} from "../entities/package";

async function getPackages(req: Request, res: Response) {
    let repository = getRepository(Package);
    let packages = await repository.find();

    return packages;
};

export {getPackages as get};

log("INIT", "Loaded controllers/packages.ts");