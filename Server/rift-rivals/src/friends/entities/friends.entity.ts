import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../../profile/entities/profile.entity";

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

    @ManyToOne(() => Profile)
    @JoinColumn({ foreignKeyConstraintName: "receiverId", referencedColumnName: "id" })
    receiver: Profile;
    
    @Column()
    accepted: boolean;
}