import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { MatIconRegistry } from '@angular/material';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userservice: UserService,
    private router: Router, private MatIconRegistry: MatIconRegistry) { }

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    emailId: ['', Validators.required],
    password: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }

  onSubmit(user) {
    this.submitted = true;
    this.userservice.login(user)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("invalid")
    }
    console.log(user);
  }
}




