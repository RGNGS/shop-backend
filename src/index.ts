import * as dotenv from "dotenv"; dotenv.config();
import {express, Request, Response} from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import {log} from "./utils/logger";

// Initialize Express instance.
const app = express();

// Initialize middleware. 
app.use(bodyParser.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    log("INIT", "Loaded app.ts");
});

process.on("unhandledRejection", err => {
    throw err;
});
