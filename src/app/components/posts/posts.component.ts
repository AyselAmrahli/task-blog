import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>;
  loading: boolean = true;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {

    this.postService.getPosts()
    .subscribe(response => {
      this.posts = response.body,
      this.loading = false;
      // console.log(response)
    },
      error => console.log(error));
  }

}
