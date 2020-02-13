import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post-service.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers:[PostService]

})
export class FormComponent implements OnInit {

  post: Post = new Post();
  posts = []

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(){

  // }

  onSubmit(){

    this.posts.push(this.post)
    console.log(this.post)
    console.log(this.posts)
  }

}
