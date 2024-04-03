import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CharacterBase {
    @PrimaryGeneratedColumn()
    id: number = 0;
  
    @Column({ type: 'varchar', length: 16 })
    name: string = "";

    @Column({ type: 'varchar', length: 256 })
    description: string = "";
}