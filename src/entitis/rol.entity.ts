// rol.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { UserEntity } from "./user.entity"; 

@Entity('rol', { schema: 'categoriass' })
export class RolEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'nombre', comment: 'nombre del rol' })
  nombre: string;

  @OneToOne(() => UserEntity, user => user.rol)
  user: UserEntity;
}
