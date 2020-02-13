import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  post: Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.post)
  }

}
