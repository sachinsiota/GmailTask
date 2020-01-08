import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  constructor(public dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.createUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.createUserForm.valid) {
      this.dataServiceService.createNewUser(this.createUserForm.value);
    }
  }

}
