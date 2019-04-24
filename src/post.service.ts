import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  private readonly posts: Post[] = [];

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  save(entity){
    return this.postRepository.save(entity);
  }

  findAllPosts(): Post[] {
    return this.posts;
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }
}