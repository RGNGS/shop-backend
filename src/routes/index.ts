import {Router, Application} from "express";
import LoginRouter from "./login";
import PackagesRouter from "./packages";

const router = Router();

export default function(app: Application) {
    router.use(LoginRouter(app));
    router.use(PackagesRouter(app));

    return router;
};