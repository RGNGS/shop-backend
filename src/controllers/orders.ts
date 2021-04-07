import {Request, Response} from "express";
import {log} from "../utils/logger";
import {Order} from "../entities/order";
import {getRepository} from "typeorm";
import packages from "../config/packages.json";

async function getOrders(req: Request, res: Response) {
    if (!req.user) {
        res.sendStatus(401);
        return;
    };

    let repository = getRepository(Order);
    //@ts-ignore
    let orders = await repository.find({where: {user: req.user.id}});

    let pkgs = [];
    for (let pkg of packages) {
        pkgs[pkg.id] = pkg;
    };

    let data = [];
    for (let ord of orders) {
        data.push({
            "package": pkgs[ord.packageId].name,
            "paymentMethod": ord.paymentMethod,
            "status": ord.status,
            "timestamp": ord.timestamp
        });
    };

    res.status(200);
    res.json(data);
};

export {getOrders as get}


log("INIT", "Loaded controllers/orders.ts");