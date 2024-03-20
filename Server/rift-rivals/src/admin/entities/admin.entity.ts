import { Profile } from "src/profile/entities/profile.entity";
import { Wallet } from "src/wallet/entities/wallet.entity";
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 16, unique: true })
    username: string;
  
    @Column({ type: 'varchar', length: 64, unique: true })
    email: string;
  
    @Column({ type: 'varchar', length: 128 })
    password: string;

    @Column({ type: "date" })
    creationDate: Date;
}