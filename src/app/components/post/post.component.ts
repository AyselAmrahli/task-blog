import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Observable<Post[]>;
  postId: number;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,

  ) {}


  ngOnInit() {

    // get parameter from url
    this.postId = this.route.snapshot.params['id'];



    this.postService.getSpesificPost(this.postId)
    .subscribe(response => {
      this.post = response.body
      console.log(response)});
  }

}
