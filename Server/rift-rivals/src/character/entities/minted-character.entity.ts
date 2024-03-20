import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterBase } from "./character-base.entity";
import { User } from "src/user/entities/user.entity";

@Entity()
export class MintedCharacter {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({ foreignKeyConstraintName: "userId",  referencedColumnName: "id" })
    user: User;

    @ManyToOne(() => CharacterBase)
    @JoinColumn()
    characterBase: CharacterBase;
}