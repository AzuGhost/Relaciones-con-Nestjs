import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { categori_entity } from "./categorias.entity";




@Entity('products', { schema: 'ventas' })
export class product_entity {

    @ManyToOne(() => categori_entity, category => category.id)
    @JoinColumn({ name: 'category_id' })
    category: categori_entity;


    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'


    })
    createAT: Date;


    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'


    })
    updateAT: Date;

    @DeleteDateColumn({
        name: 'delet_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: true,

    })
    deletAT: Date;

    @Column('varchar', {


        name: ' title',
        nullable: false,
        comment: 'nombre del producto '
    })
    title: string;
    @Column('number', {


        name: 'price',
        nullable: false,
        comment: 'precio del producto '
    })
    price: number;

    @Column('varchar', {


        name: 'desciption',
        nullable: false,
        comment: 'nombre del producto '
    })
    des: string;

    @BeforeInsert()
    @BeforeUpdate()
     async setTlitle(){
        if(!this.title){
            return
        }
        this.title = this.title.toUpperCase()
    }
    @BeforeInsert()
    @BeforeUpdate()
    async description (){
        if(!this.title){
            return
        }
        this.title = this.title.toLowerCase()
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setmail(){
        if(!this.title){
            return
        }
        this.title = this.title.toUpperCase().trim()  // trim sin espacion 
    }
 

    @BeforeInsert()
    @BeforeUpdate()
    async sewproduct() {
        if (!this.title) {
            return;
        }
        this.title = this.title.toString() + this.createAT.toDateString();
    }

    






}



