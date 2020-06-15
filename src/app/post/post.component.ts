import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  addPostForm: FormGroup;
  //postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');
  postPayload: any;
  addpostService: any;
  
  constructor( private router: Router) {

    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });

   }

  ngOnInit(): void {
  }
  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }    
}
