import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  UserForme: FormGroup;
  ngOnInit(): void {

  }
  constructor(private fb: FormBuilder) {
    this.creatForm();
   }
private creatForm() {
  this.UserForme = this.fb.group({
    Login: ['', Validators.required],
    Password: ['', Validators.required]
  });
}





}
