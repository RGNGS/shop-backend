import {Router, Application} from "express";
import LoginRouter from "./login";
import PackagesRouter from "./packages";
import InfoRouter from "./info";

const router = Router();

export default function(app: Application) {
    router.use(LoginRouter(app));
    router.use(PackagesRouter(app));
    router.use(InfoRouter(app));

    return router;
};