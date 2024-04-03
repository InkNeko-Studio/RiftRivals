import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Wallet } from "./wallet.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;
  
    @Column({ type: 'varchar', length: 16, unique: true })
    username: string = "";
  
    @Column({ type: 'varchar', length: 128, unique: true })
    email: string = "";
  
    @Column({ type: 'varchar', length: 128 })
    password: string = "";
    
    @OneToOne(() => Profile, { cascade: true })
    @JoinColumn()
    profile: Profile = new Profile();

    @OneToOne(() => Wallet, { cascade: true })
    @JoinColumn()
    wallet: Wallet = new Wallet();

    @Column({ type: "date" })
    creationDate: Date = new Date();
    
    @Column({ type: "date" })
    lastLogin: Date = new Date();
}