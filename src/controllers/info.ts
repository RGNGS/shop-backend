import {Request, Response} from "express";
import {log} from "../utils/logger";
import * as dotenv from "dotenv";
import SteamAPI from "steamapi";

dotenv.config();
const steam = new SteamAPI(process.env.API_STEAM);

function infoGet(req: Request, res: Response): void {
    if (!req.user) {
        res.sendStatus(401);
        return;
    };

    // @ts-ignore
    steam.getUserSummary(req.user.id)
        .then(summary => {
            res.json({
                name: summary.nickname,
                avatar: summary.avatar
            });
        })
        .catch(err => {
            res.sendStatus(500);
        });
};

export {infoGet as get};

log("INIT", "Loaded controllers/info.ts");