import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number = 0;
  
    @Column({ type: 'integer' })
    fans: number = 0;

    @Column({ type: 'integer' })
    coins: number = 0;
    
    @Column({ type: 'integer' })
    diamonds: number = 0;
}