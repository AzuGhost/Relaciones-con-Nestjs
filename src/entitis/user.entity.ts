// user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { RolEntity } from "./rol.entity"; 

@Entity('user', { schema: 'categoriass' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { name: 'nombre', comment: 'nombre del usuario' })
  nombre: string


  @Column('varchar', { name: 'direcion', comment: 'direcion del usuario' })
  durecion: string

  
  @OneToOne(() => RolEntity)
  @JoinColumn()
  rol: RolEntity
}
