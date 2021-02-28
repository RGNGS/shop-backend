import "reflect-metadata";
import {createConnection} from "typeorm";
import {log} from "./logger";

function setup(): void {
    createConnection({
        type: "mysql", 
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
            
        ],
        synchronize: true,
    })
        .then(async conn => {
            log("SQL", "Initialized database connection.");
        })
        .catch(err => {
            log("SQL", err);
        });
};

export {setup};