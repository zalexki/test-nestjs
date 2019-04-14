import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { PostModule } from './post.module';
import { PostService } from './post.service';

@Module({
  imports: [PostModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService, PostService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
