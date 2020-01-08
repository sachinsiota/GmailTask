import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
currentUser: any;
users = [
  {
    id: 1,
    name: 'Sachin',
    email: 'sachin@gmail.com',
    password: 'abc',
    inbox: [
      {
        from: 'test@gmail.com',
        subject: 'application',
        content: 'This is a test email.',
        date: new Date(),
      }
    ],
    sentItems: [
      {
        to: 'test@gmail.com',
        subject: 'application',
        content: 'This is a test email.',
        date: new Date(),
      },
      {
        to: 'sachin@gmail.com',
        subject: 'application',
        content: 'This is a test email.',
        date: new Date(),
      }
    ]
  },
  {
    id: 2,
    name: 'Test',
    email: 'test@gmail.com',
    password: 'abc',
    inbox: [
      {
        from: 'sachin@gmail.com',
        subject: 'application',
        content: 'This is a test email.',
        date: new Date(),
      }
    ],
    sentItems: [
      {
        to: 'sachin@gmail.com',
        subject: 'application',
        content: 'This is a test email.',
        date: new Date(),
      }
    ]
  }
];
  constructor(private router : Router, private snackBar: MatSnackBar) {
    this.currentUser = this.users[0];
    console.log(this.users);
    console.log(this.currentUser);
   }

  createNewUser(value) {
    let user = {
      id: this.users.length + 1,
      name: value.name,
      email: value.email,
      password: value.password,
      inbox: null,
      sentItems: null
    }
    this.users.push(user);
    this.currentUser = user;
    this.openSnackBar('New user has been created', 3000);
    this.router.navigateByUrl('inbox');
  }

  switchUser(id: number) {
    this.currentUser = this.users.find(user => user.id == id);
    console.log(this.currentUser);
  }

  sendEmail(recipients, content, from) {
    let length = recipients.length;
    let i = 0;
    for (i ; i < length; i++){

    }
  }

  openSnackBar(message: string, duration:number) {
  let config = new MatSnackBarConfig();
      config.duration = duration;
      config.verticalPosition = 'top';
      // config.panelClass = ['green-snackbar']
      this.snackBar.open(message, 'x', config);
}
}
