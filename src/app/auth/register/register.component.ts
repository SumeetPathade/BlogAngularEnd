import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer, Validators } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import {AuthService} from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  registerPayload:RegisterPayload;

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private router:Router,) {
  
   }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      username:'',
      email:['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    }, {
    validator: this.mustMatch('password', 'confirmpassword')
  });
  }

  getValidationMsg(validationFor: string, form: any) {
    if (!form.valid && form.touched) {
      if (form.controls[validationFor].errors && form.controls[validationFor].touched) {
        if (form.controls[validationFor].errors.required) {
          return [validationFor]['required']
        } 
      }
    }
  }
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    console.log('before reg form',this.registerForm.value)
    
    
    this.authService.register(this.registerForm.value).subscribe(data => {
      console.log('register succes');
       //this.toast.success('User created Successfully');
      this.router.navigate(['login'])
      //this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed');
    });
  }


}
