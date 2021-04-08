import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    userId: string;

    @Column()
    personalData: string; 

    @Column()
    packageId: number;

    @Column()
    paymentMethod: string; 

    @Column()
    status: "NEW" | "SUCCESS" | "PENDING" | "FAILURE";

    @Column()
    timestamp: number; 
};