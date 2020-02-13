import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html'
})
export class PostSecundarioComponent implements OnInit {

  posts = []

  constructor(private postService:PostService) { }

  ngOnInit(): void {
   this.posts = this.postService.buscarTodos();


  console.log(this.posts)

  }


}
