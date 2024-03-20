import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 16 })
    displayName: string;
    
    @Column({ type: 'varchar', length: 20 })
    teamName: string;

    @Column({ type: 'integer' })
    pictureId: number;
}