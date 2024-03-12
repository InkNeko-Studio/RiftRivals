import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class Friends {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    senderId: number;

    @OneToOne(() => Profile)
    @JoinColumn({ foreignKeyConstraintName: "senderId",  referencedColumnName: "id" })
    sender: Profile;

    @Column()
    receiverId: number;

    @OneToOne(() => Profile)
    @JoinColumn({ foreignKeyConstraintName: "receiverId", referencedColumnName: "id" })
    receiver: Profile;
    
    @Column()
    accepted: boolean;
}