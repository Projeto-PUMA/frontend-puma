import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { PostManagementService } from './post-management.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postManagementService: PostManagementService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.postManagementService.getPosts()
      .subscribe(data => this.posts = data);

  }

  // getPosts(){

  //   this.postManagementService.getPosts()
  //     .subscribe( () => {
  //         alert("Post Criado com Sucesso.");
  //       });
  // }

}
