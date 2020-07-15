import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit, OnDestroy {
  // Local array
  posts: Post[];

  // Subscription
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // Updates the local array
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onLoveIt(post: Post) {
    this.postsService.lovePost(post);
  }

  onDontLoveIt(post: Post) {
    this.postsService.dontLovePost(post);
  }

  // BUTTON DELETE
  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  getColor(post: Post) {
    if (post.loveIts > 0) {
      return 'green';
    } else if (post.loveIts < 0) {
      return 'red';
    }
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
