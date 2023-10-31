import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Autor } from "./autor.entity";
import { Curso } from "./curso.entity";

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(type => Curso, autor => autor.libros)
  curso: Curso;
}