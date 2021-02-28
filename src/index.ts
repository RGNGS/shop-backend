import * as dotenv from "dotenv";
import * as sql from "./utils/sql";
import {express, Request, Response} from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import {log} from "./utils/logger";

// Initialize app instance.
const app = express();
dotenv.config();
sql.setup();

// Initialize middleware. 
app.use(bodyParser.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    log("INIT", "Loaded app.ts");
});

process.on("unhandledRejection", err => {
    throw err;
});
