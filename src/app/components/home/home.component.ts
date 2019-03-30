import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<Post[]>;
  loading: Boolean = true;
  constructor(
    private postService: PostService

  ) { }

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
