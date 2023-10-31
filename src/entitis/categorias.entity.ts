import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { product_entity } from "./product.entity";



@Entity('categoria', { schema: 'categoriass' })
export class categori_entity {

    @OneToMany(() => product_entity, product => product.category)
    products: product_entity[]



    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        name: ' title',
        nullable: false,
        comment: 'nombre del producto '
    })
    nombre: string;

}