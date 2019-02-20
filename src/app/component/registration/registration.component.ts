import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
submitted = false;

  constructor(   private formBuilder: FormBuilder,
    private router: Router,
    private userservice:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      name: ['', Validators.required],
      emailId: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNumber:['',[Validators.required,Validators.minLength(10),]]
});
  }
  get f() { return this.registerForm.controls; }

  onSubmit(user) {
    this.submitted = true;
this.userservice.register(user)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(user)

  }
}