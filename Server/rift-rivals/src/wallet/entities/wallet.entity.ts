import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'integer' })
    fans: number;

    @Column({ type: 'integer' })
    coins: number;
    
    @Column({ type: 'integer' })
    diamonds: number;
}