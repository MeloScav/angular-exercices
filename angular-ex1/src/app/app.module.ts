import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

// SERVICES
import { PostsService } from './services/posts.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostFormComponent } from './post-form/post-form.component';

// Routing
const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: PostFormComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    PostFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
