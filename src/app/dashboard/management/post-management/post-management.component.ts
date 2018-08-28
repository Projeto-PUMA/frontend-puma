import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { PostManagementService } from './post-management.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  constructor(private postManagementService: PostManagementService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  getPosts(){

    this.postManagementService.getPosts()
      .subscribe( () => {
          alert("Post Criado com Sucesso.");
        });
  }

}
