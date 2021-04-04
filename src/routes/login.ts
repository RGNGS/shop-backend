import {Request, Response, Router, Application} from "express";
import session from "express-session";
import {log} from "../utils/logger";
import {getRepository} from "typeorm";
import {User} from "../entities/user";
import passport from "passport";
import SteamStrateg from "passport-steam";
import bcrypt from "bcrypt";
import * as login from "../controllers/login";

const SteamStrategy = SteamStrateg.Strategy;
const router = Router();

export default function(app: Application) { 
    app.use(session({
        secret: bcrypt.hashSync(bcrypt.genSaltSync(), bcrypt.genSaltSync(), 10),
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
        }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    
    passport.deserializeUser(async (obj: any, done) => {
        let repository = getRepository(User);
        let user = await repository.findOne({where: {id: obj.id}});

        if (!user) {
            done(null, {});
            return; 
        };

        done(null, user);
    });

    passport.use(new SteamStrategy({
        returnURL: `http://localhost:1000/login/return/`,
        realm: `http://localhost:1000/`,
        apiKey: process.env.API_STEAM
    },
        async (identifier, profile, done) => {
            let repository = getRepository(User);
            let user = await repository.findOne({where: {id: profile.id}}); 

            if (!user) {
                user = new User();
                user.id = profile.id;
                user.rcoins = 0; 
                await repository.save(user);
            };

            return done(null, user);
        }
    ));

    router.get("/login", passport.authenticate("steam"));

    router.get("/login/return", passport.authenticate("steam", { 
        successRedirect: "/",
        failureRedirect: "/login" 
    }));

    router.get("/login/user", (req, res) => {
        login.user(req, res);
    });

    router.get("/logout", (req: Request, res: Response) => {
        login.logout(req, res);
    });

    return router; 
};

log("INIT", "Loaded routes/login.ts");