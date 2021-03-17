import "reflect-metadata";
import {createConnection} from "typeorm";
import {log} from "./logger";
import {User} from "../entities/user";
import {Package} from "../entities/package";
import {Transaction} from "../entities/transaction";

function setup(): void {
    createConnection({
        type: "mysql", 
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
            User,
            Package,
            Transaction
        ],
        synchronize: true,
    })
        .then(async conn => {
            log("INIT", "Loaded utils/sql.ts.");
        })
        .catch(err => {
            log("SQL", err);
        });
};

export {setup};