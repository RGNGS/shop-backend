import {Router} from "express";
import LoginRouter from "./login";

const router = Router();

export default function(app) {
    router.use(LoginRouter(app));

    return router;
};