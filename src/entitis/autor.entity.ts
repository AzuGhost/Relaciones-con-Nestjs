import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { autor_Entity } from "./lobros-aut.entity";


@Entity('utor', { schema: 'categoriass' })
export class book_Entity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column('varchar', {
        name: 'nombre',
        comment: 'nombre del libro'
    })
    nombre: string

    @Column('date', {
        name: 'fecha_publicacion',
        comment: 'año de publicación'
    })
    fecha_publicacion: Date

    @Column('decimal', {
        name: 'precio',
        comment: 'precio del libro'
    })
    precio: number

    @ManyToMany(() => autor_Entity, autor => autor.libros)
    autores: autor_Entity[];
}
