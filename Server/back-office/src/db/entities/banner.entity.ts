import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BannerEntry } from "./banner-entry.entity";

@Entity()
export class Banner {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: "varchar", length: 32 })
    name: string = "";
    
    @Column({ type: "integer" })
    price: number = 0;
  
    // @OneToMany('BannerEntry', 'banner')
    // @JoinColumn()
    // characters: BannerEntry[];
}