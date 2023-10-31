import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Perfil } from "./perfil.entity";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToOne(type => Perfil, perfil => perfil.usuario)
  perfil: Perfil;
}