import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { DatabaseModule } from './database.module';
import { Connection } from 'typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Post])],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {
  constructor(private readonly connection: Connection) {}
}