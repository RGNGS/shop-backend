import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    steamID: string;

    @Column()
    rcoins: number;
};