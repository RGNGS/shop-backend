import {Router} from "express";
import LoginRouter from "./login";
import LogoutRouter from "./logout";

const router = Router();

export default function(app) {
    router.use(LoginRouter(app));
    router.use(LogoutRouter(app));

    return router;
};