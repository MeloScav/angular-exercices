import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Form initialization
    this.initForm();
  }

  // INITIALIZATION
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: [0],
      theDate: [new Date()],
    });
  }

  // SAVE POST
  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = this.postForm.get('loveIts').value;
    const theDate = this.postForm.get('theDate').value;
    // New post and save
    const newPost = new Post(title, content, loveIts, theDate);
    this.postsService.createNewPost(newPost);
    // Return to list of posts
    this.router.navigate(['/posts']);
  }
}
