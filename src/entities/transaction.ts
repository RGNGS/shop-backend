import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {User} from "./user";
import {Package} from "./package";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number; 

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @Column()
    personalData: string; 

    @OneToOne(() => Package)
    @JoinColumn()
    package: Package;

    @Column()
    timestamp: number; 
};