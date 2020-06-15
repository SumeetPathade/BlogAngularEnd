import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private _formBuilder: FormBuilder
    , private _authService: AuthService,private router:Router) {
    this.login = this._formBuilder.group({
      username: ['', [Validators.required]],
      // username: [null, [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  public onSubmit() {
    if(this.login.invalid) 
    {
      return;
      console.log('datatatt')
    }else{
      console.log('error is not genersated');
      this.router.navigate(['dashboard'])
    }

    this._authService.login(this.login.value).subscribe(res => {
      console.log(res);
    })
  }

}
