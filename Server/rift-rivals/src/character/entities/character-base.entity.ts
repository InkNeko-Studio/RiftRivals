import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CharacterBase {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 16 })
    name: string;

    @Column({ type: 'integer' })
    charismaMin: number;

    @Column({ type: 'integer' })
    charismaMax: number;

    @Column({ type: 'integer' })
    energyMin: number;

    @Column({ type: 'integer' })
    energyMax: number;
    
    @Column({ type: 'integer' })
    leadershipMin: number;

    @Column({ type: 'integer' })
    leadershipMax: number;
    
    @Column({ type: 'integer' })
    skillMin: number;

    @Column({ type: 'integer' })
    skillMax: number;
}