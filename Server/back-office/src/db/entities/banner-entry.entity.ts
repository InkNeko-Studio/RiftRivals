import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterBase } from "./character-base.entity";
import { Banner } from "./banner.entity";

@Entity()
export class BannerEntry {
    @PrimaryGeneratedColumn()
    id: number = 0;
  
    @Column()
    characterId: number = 0;

    @ManyToOne(() => CharacterBase)
    @JoinColumn({ foreignKeyConstraintName: "characterId",  referencedColumnName: "id" })
    character: CharacterBase = new CharacterBase();
    
    @Column({ type: "integer" })
    percentage: number = 0;
    
    // @ManyToOne('Banner', 'characters')
    // @JoinColumn()
    // banner: Banner;
}