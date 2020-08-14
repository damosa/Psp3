import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    namePet: string

    @Column()
    nameOwner: string

    @Column({ type: "date" })
    date: Date

    @Column({ type: "time" })
    time:Date

    @Column()
    symptoms: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;

}