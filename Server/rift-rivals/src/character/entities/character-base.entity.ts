import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CharacterBase {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 16 })
    name: string;
}