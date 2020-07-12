import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // Local array of Post objects
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content:
        'Nulla laboris consequat laboris voluptate nostrud ea in est ut.',
      loveIts: 0,
      theDate: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content:
        'Qui nulla aliquip duis Lorem excepteur laboris anim sunt dolore dolore aute officia est.',
      loveIts: 0,
      theDate: new Date(),
    },
  ];
  // Subject
  postsSubject = new Subject<Post[]>();

  constructor() {}

  // EMIT
  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  // SAVE
  savePosts() {}

  // GET POSTS
  getPost() {}

  // NEW POST
  createNewPost() {}

  // REMOVE BOOK
  removeBook() {}
}
