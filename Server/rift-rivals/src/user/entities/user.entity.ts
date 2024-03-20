import { Profile } from "src/profile/entities/profile.entity";
import { Wallet } from "src/wallet/entities/wallet.entity";
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 16, unique: true })
    username: string;
  
    @Column({ type: 'varchar', length: 64, unique: true })
    email: string;
  
    @Column({ type: 'varchar', length: 128 })
    password: string;
    
    @OneToOne(() => Profile, { cascade: true })
    @JoinColumn()
    profile: Profile;

    @OneToOne(() => Wallet, { cascade: true })
    @JoinColumn()
    wallet: Wallet;

    @Column({ type: "date" })
    creationDate: Date;
    
    @Column({ type: "date" })
    lastLogin: Date;
}