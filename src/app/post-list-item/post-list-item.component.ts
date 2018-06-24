import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() loveIts: number;
  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postsService.loveIt(this.id);
  }

  onDontLoveIt() {
    this.postsService.dontLoveIt(this.id);
  }

}
