import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 12 })
    displayName: string;
}