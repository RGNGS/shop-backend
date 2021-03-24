import {Router, Application} from "express";
import LoginRouter from "./login";
import LogoutRouter from "./logout";
import PackagesRouter from "./packages";

const router = Router();

export default function(app: Application) {
    router.use(LoginRouter(app));
    router.use(LogoutRouter(app));
    router.use(PackagesRouter(app));

    return router;
};