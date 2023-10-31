// user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

@Entity('autor', { schema: 'categoriass' })
export class autor_Entity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar', {
        name: 'nombre',
        comment: 'nombre del usuario'
    })
    nombre: string

    @Column('varchar', {
        name: 'nacionalidad',
        comment: 'nacionalidad del autor'
    })
    nacionalidad: string

    @Column('date', {
        name: 'fecha_nacimiento',
        comment: 'año de nacimiento del autor'
    })
    fecha_n: Date

    @ManyToMany(() => book_Entity, book => book.autores)
    @JoinTable()
    libros: book_Entity[];
}

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
