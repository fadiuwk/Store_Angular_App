import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  showFormError:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
  ) { }

  get Username() {
    return this.loginForm.get('username')!;
  }

  get Password() {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);

      if (this.Username.value == "user" && this.Password.value == "user") {
        localStorage.setItem("role", "UXX");
        this.showFormError = false;
        this.route.navigate(['home'])

      } else if (this.Username.value == "admin" && this.Password.value == "admin") {
        localStorage.setItem("role", "XAX");
        this.showFormError = false;
        this.route.navigate(['admin'])
      } else {
        this.showFormError = true;
      }

    }
  }


}
