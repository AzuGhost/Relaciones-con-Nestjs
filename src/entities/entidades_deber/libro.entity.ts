@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @ManyToOne(type => Autor, autor => autor.libros)
  autor: Autor;
}