import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full'
  },
  {
    path: 'posts', 
    component: PostsComponent,
  },

  {
    path: 'posts/:id', 
    component: PostComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
