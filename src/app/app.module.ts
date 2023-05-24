import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { NewCompComponent } from './new-comp/new-comp.component';
import { FavoriteComponent } from './new-comp/favorite.component';
import { NewCourseFormComponent } from './new-comp/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SummaryPipe,
    NewCompComponent,
    FavoriteComponent,
    NewCourseFormComponent,
    InputFormatDirective,
    ContactFormComponent,
    ChangePasswordComponent,
    PostsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
