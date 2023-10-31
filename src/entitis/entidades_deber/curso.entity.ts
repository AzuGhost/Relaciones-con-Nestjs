import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Estudiante } from "./estudiante.entity";

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToMany(type => Estudiante, estudiante => estudiante)
  estudiantes: Estudiante[];
}