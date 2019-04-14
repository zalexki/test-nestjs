import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService: PostService
  ) {}

  @Get()
  getIndex(): string {
    return this.appService.getHello();
  }

  @Get(':name')
  getWithParam(@Param() params): string {
    let newPost = new Post();
    newPost.name = params.name;
    this.postService.create(newPost);
    console.log(this.postService.save(newPost));

    return this.appService.getHello();
  }
  
}
