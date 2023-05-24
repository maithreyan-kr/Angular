import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
  posts: any;
  errorMessage:any;

  constructor(private service: PostService) {
    // http.get(this.url)
    //   .subscribe(response => {
    //     // console.log(response.toString());
    //     this.posts = response;
    //   });
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => {
        // console.log(response.toString());
          this.posts = response;
        }, 
        error => {
          alert('An unexpected error occured.');
          console.log(error);
      });
  }

  create(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          this.posts.splice(0, 0, post);
          console.log(response);
        }, 
        (error: Response) => {
          if (error.status === 400){}
            // this.form.setErrors(error.json());
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
            
      });
  }

  update(post: any) {
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response);
        }, 
        error => {
          alert('An unexpected error occured.');
          this.errorMessage = error;
          console.log(error);  
      });
    // this.http.put(this.url, JSON.stringify(post));
  }

  delete(post: any) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: Response) => {
          if (error.status === 404)
            alert('this post has already been deleted.');
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }   
      });
  }

}
