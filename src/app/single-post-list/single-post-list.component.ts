import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post-list',
  templateUrl: './single-post-list.component.html',
  styleUrls: ['./single-post-list.component.scss']
})

export class SinglePostListComponent implements OnInit {

  title: string = 'Title';
  content: string = 'Content';

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.postsService.getPostById(+id).title;
    this.content = this.postsService.getPostById(+id).content;
  }

}
