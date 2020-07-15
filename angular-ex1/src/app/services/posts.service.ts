import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

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

  // SAVE
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  // GET POSTS
  getPosts() {
    firebase
      .database()
      .ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  // NEW POST
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  // REMOVE POST
  removePost(post: Post) {
    // Retrieve the index
    const postIndexToRemove = this.posts.findIndex((el) => {
      if ((el = post)) {
        return true;
      }
    });
    // Remove this index
    this.posts.splice(postIndexToRemove, 1);
    // Save the array
    this.savePosts();
    // Emit
    this.emitPosts();
  }

  // LOVE POST
  lovePost(post: Post) {
    post.loveIts = post.loveIts + 1;
    // Save
    this.savePosts();
    // Emit
    this.emitPosts();
  }

  // DON'T LOVE POST
  dontLovePost(post: Post) {
    post.loveIts = post.loveIts - 1;
    // Save
    this.savePosts();
    // Emit
    this.emitPosts();
  }
}
