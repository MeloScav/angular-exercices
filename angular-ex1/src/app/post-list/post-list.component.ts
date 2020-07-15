import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // Local array
  posts: Post[];

  // Subscription
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) {}

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

  // BUTTON NEW POST
  onNewPost() {
    this.router.navigate(['new']);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
