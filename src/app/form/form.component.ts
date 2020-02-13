import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'

})
export class FormComponent implements OnInit {

  post: Post = new Post();


  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postService.salvar(this.post)

  }

  // onSubmit(){

  //   this.posts.push(this.post)
  //   console.log(this.post)
  //   console.log(this.posts)
  // }

}
