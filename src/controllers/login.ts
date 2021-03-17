import {Request, Response} from "express";

function returnUser(req: any, res: Response) { 
    if (!req.user) {
        res.sendStatus(401);
        return; 
    };

    res.status(200);
    res.json(req.user);
};

function loginSuccess(req: any, res: Response) {
    if (!req.user) {
        res.sendStatus(401);
        return; 
    };

    res.status(200);
    res.json(req.user);
};

function loginFailure(req: any, res: Response) {
    res.sendStatus(401);
};

export {returnUser, loginSuccess as success, loginFailure as failure};