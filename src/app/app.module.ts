import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { SinglePostListComponent } from './single-post-list/single-post-list.component';
import { AuthComponent } from './auth/auth.component';
import { FOFComponent } from './f-o-f/f-o-f.component';

import { PostsService } from './services/posts.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'posts', canActivate: [AuthGuard], component: PostListComponent },
  { path: 'posts/:id', canActivate: [AuthGuard], component: SinglePostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent },
  { path: 'not-found', component: FOFComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    SinglePostListComponent,
    AuthComponent,
    FOFComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
