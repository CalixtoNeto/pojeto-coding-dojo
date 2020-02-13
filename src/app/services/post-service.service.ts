import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';


@Injectable()
export class PostService {



  salvar(post:Post){
    const posts = this.buscarTodos();
    posts.push(post);

    window.localStorage.setItem('posts',JSON.stringify(posts))
  }

  buscarTodos(): Post[] {
    return JSON.parse(window.localStorage.getItem('posts')) || {
      autor:"Autor",
      titulo:"Titulo",
      data:"00/00/0000",
      conteudo:"Conteudo",
    };
  }
  buscarPostPrincipal(){
    const posts = this.buscarTodos();

    return posts[0]
  }



  constructor() { }
}
