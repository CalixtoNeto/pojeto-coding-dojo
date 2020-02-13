import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';


@Injectable()
export class PostService {

  salvar(post:Post){
    console.log(Post)
  }

  constructor() { }
}
