import * as dotenv from "dotenv";
import * as sql from "./utils/sql";
import {Request, Response} from "express";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import helmet from "helmet";
import {log} from "./utils/logger";
import Router from "./routes/index";

// Initialize app instance.
const app = express();
dotenv.config();
sql.setup();

// Initialize middleware. 
app.use(bodyParser.json());
app.use(helmet());
app.use(Router(app));
app.use(express.static(path.join(__dirname, "client")));

// Serve frontend.
app.get("*", (req: Request, res: Response) => {
    console.log('!?!?!?')
    console.log(path.join(__dirname, "client", "index.html"));
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(process.env.APP_PORT, () => {
    log("INIT", "Loaded app.ts");
});

process.on("unhandledRejection", err => {
    throw err;
});
