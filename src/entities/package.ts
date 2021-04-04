import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Package {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column("longtext")
    description: string; 

    @Column()
    price: number; 

    @Column("longtext")
    gradient: string; 

    @Column()
    type: "rcoins" | "rank"; 

    @Column()
    value: string; 
};