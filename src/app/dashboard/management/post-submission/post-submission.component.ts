import { Component, OnInit } from '@angular/core';
import { PostSubmissionService } from './post-submission.service';
import { Post, Author } from '../../../models/post.model';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'app-post-submission',
  templateUrl: './post-submission.component.html',
  styleUrls: ['./post-submission.component.css']
})
export class PostSubmissionComponent implements OnInit {
  post: Post = new Post();
  author: Author = new Author();

  constructor(private postSubmissionService: PostSubmissionService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  
  }

  createPost(){
    this.author.id = this.authenticationService.getUserId();
    this.post.author = this.author;
    console.log(JSON.stringify(this.post));
    
    this.postSubmissionService.create(this.post)
      .subscribe( () => {
          alert("Post Criado com Sucesso.");
        });
  }

}

