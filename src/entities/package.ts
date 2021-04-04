import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Package {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    description: string; 

    @Column()
    price: number; 

    @Column()
    gradient: string; 

    @Column()
    type: "rcoins" | "rank"; 

    @Column()
    value: string; 
};