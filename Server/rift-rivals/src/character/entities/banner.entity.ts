import { Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CharacterBase } from "./character-base.entity";

@Entity()
export class Banner {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => CharacterBase)
    @JoinColumn()
    characters: CharacterBase[];
}