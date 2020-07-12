import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // Local array of Post objects
  posts: Post[] = [];
  // Subject
  postsSubject = new Subject<Post[]>();

  constructor() {}

  // EMIT
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
}
