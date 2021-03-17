import * as dotenv from "dotenv";
import * as sql from "./utils/sql";
import express from "express";
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

app.listen(process.env.APP_PORT, () => {
    log("INIT", "Loaded app.ts");
});

process.on("unhandledRejection", err => {
    throw err;
});
