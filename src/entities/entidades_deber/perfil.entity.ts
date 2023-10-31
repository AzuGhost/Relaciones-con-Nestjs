@Entity()
export class Perfil {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  biografía: string;

  @OneToOne(type => Usuario, usuario => usuario.perfil)
  usuario: Usuario;
}
