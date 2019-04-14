import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('text')
  content: string;

  @Column('text')
  filename: string;

  @Column('int')
  views: number;

  @Column()
  createdAt: Date;

  @Column()
  isPublished: boolean;
}