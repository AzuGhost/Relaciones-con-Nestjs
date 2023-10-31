import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Libro } from "./libro.entity";

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(type => Libro, libro => libro.autor)
  libros: Libro[];
}

