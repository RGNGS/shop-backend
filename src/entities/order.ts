import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"

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
    status: "new" | "success" | "pending" | "failure";

    @Column()
    timestamp: number; 
};