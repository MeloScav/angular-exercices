import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() post: [];
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

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
