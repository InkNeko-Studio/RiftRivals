import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterBase } from "./character-base.entity";
import { Banner } from "./banner.entity";

@Entity()
export class BannerEntry {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    characterId: number;

    @ManyToOne(() => CharacterBase)
    @JoinColumn({ foreignKeyConstraintName: "characterId",  referencedColumnName: "id" })
    character: CharacterBase;
    
    @Column({ type: "integer" })
    percentage: number;
    
    @ManyToOne(() => Banner)
    @JoinColumn()
    banner: Banner;
}