import { Profile } from "src/profile/entities/profile.entity";
import { Wallet } from "src/wallet/entities/wallet.entity";
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class LoginData {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'timestamp', nullable: true })
    timestamp: Date;

    @Column()
    device: string;
}