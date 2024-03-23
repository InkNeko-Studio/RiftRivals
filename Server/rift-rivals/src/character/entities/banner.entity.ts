import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BannerEntry } from "./banner-entry.entity";

@Entity()
export class Banner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 32 })
    name: string;
    
    @Column({ type: "integer" })
    price: number;
  
    @OneToMany(() => BannerEntry, (bannerEntry) => bannerEntry.banner)
    @JoinColumn()
    characters: BannerEntry[];
}