import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 15, unique: true })
    username: string;
  
    @Column({ type: 'varchar', length: 60, unique: true })
    email: string;
  
    @Column({ type: 'varchar', length: 128 })
    password: string;
}