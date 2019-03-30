import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AppMaterialModule } from './app-material.module';

import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
