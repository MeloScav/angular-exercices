import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
})
export class PostListItemComponent implements OnInit {
  @Input() post: [];
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  onLoveIt(post) {
    this.postsService.lovePost(post);
  }

  onDontLoveIt(post) {
    this.postsService.dontLovePost(post);
  }

  // BUTTON DELETE
  onDeletePost(post) {
    this.postsService.removePost(post);
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }
}
