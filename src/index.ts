import * as dotenv from "dotenv";
import * as sql from "./utils/sql";
import {log} from "./utils/logger";
import {Request, Response} from "express";
import express from "express";
import Router from "./routes/index";
import path from "path";
import bodyParser from "body-parser";
import helmet from "helmet";

// Initialize app instance.
const app = express();
dotenv.config();
sql.setup();

// Initialize middleware. 
app.use(bodyParser.json());
app.use(helmet({contentSecurityPolicy: false}));
app.use(Router(app));
app.use(express.static(path.join(__dirname, "client")));

// Serve frontend.
app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(process.env.APP_PORT, () => {
    log("INIT", "Loaded app.ts");
});

process.on("unhandledRejection", err => {
    throw err;
});
