import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export interface Users {
  id: number,
  name: string,
  email: string,
  password: string,
  inbox: inbox[],
  sentItems: sent[]
}

export interface sent {
  to: string,
  subject: string,
  content: string,
  date: Date,
  from: string,
  email: string
}

export interface inbox {
  from: string,
  subject: string,
  content: string,
  date: Date,
  to: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  currentUser: any;
  users: Users[] = [
    {
      id: 1,
      name: 'Sachin',
      email: 'sachin@gmail.com',
      password: 'abc',
      inbox: [
        {
          from: 'Test',
          to: 'Sachin',
          email: 'test@gmail.com',
          subject: 'application',
          content: 'There are many variations of passages of Lorem Ipsum available,' +
            'but the majority have suffered alteration in some form, by injected humour,' +
            'or randomised words which dont look even slightly believable. If you are' +
            'going to use a passage of Lorem Ipsum, you need to be sure there isnt anything' +
            'embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the' +
            'Internet tend to repeat',
          date: new Date(),
        }
      ],
      sentItems: [
        {
          to: 'Test',
          subject: 'application',
          from: 'Sachin',
          email: 'test@gmail.com',
          content: 'There are many variations of passages of Lorem Ipsum available,' +
            'but the majority have suffered alteration in some form, by injected humour,' +
            'or randomised words which dont look even slightly believable. If you are' +
            'going to use a passage of Lorem Ipsum, you need to be sure there isnt anything' +
            'embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the' +
            'Internet tend to repeat',
          date: new Date(),
        },
        {
          to: 'Sachin',
          subject: 'application',
          from: 'Sachin',
          email: 'sachin@gmail.com',
          content: 'There are many variations of passages of Lorem Ipsum available,' +
            'but the majority have suffered alteration in some form, by injected humour,' +
            'or randomised words which dont look even slightly believable. If you are' +
            'going to use a passage of Lorem Ipsum, you need to be sure there isnt anything' +
            'embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the' +
            'Internet tend to repeat',
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
          from: 'Sachin',
          subject: 'application',
          to: 'Test',
          email: 'sachin@gmail.com',
          content: 'There are many variations of passages of Lorem Ipsum available,' +
            'but the majority have suffered alteration in some form, by injected humour,' +
            'or randomised words which dont look even slightly believable. If you are' +
            'going to use a passage of Lorem Ipsum, you need to be sure there isnt anything' +
            'embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the' +
            'Internet tend to repeat',
          date: new Date(),
        }
      ],
      sentItems: [
        {
          to: 'Sachin',
          subject: 'application',
          from: 'Test',
          email: 'sachin@gmail.com',
          content: 'There are many variations of passages of Lorem Ipsum available,' +
            'but the majority have suffered alteration in some form, by injected humour,' +
            'or randomised words which dont look even slightly believable. If you are' +
            'going to use a passage of Lorem Ipsum, you need to be sure there isnt anything' +
            'embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the' +
            'Internet tend to repeat',
          date: new Date(),
        }
      ]
    }
  ];

  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.currentUser = this.users[0];
  }

  // to create new user
  createNewUser(value) {
    let user = {
      id: this.users.length + 1,
      name: value.name,
      email: value.email,
      password: value.password,
      inbox: [],
      sentItems: []
    }
    this.users.push(user);
    this.currentUser = user;
    this.openSnackBar('New user has been created', 3000);
    this.router.navigateByUrl('inbox');
  }

  // to switch user from dropdown
  switchUser(id: number) {
    this.currentUser = this.users.find(user => user.id == id);
  }

  //send email to recepients
  sendEmail(recipients, subject, content) {
    const i = this.users.indexOf(this.currentUser);
    recipients.forEach((email) => {
      let inbox = {
        from: this.currentUser.name,
        email: email.email,
        to: email.name,
        subject: subject,
        content: content,
        date: new Date(),
      }
      let sent = {
        to: email.name,
        from: this.currentUser.name,
        email: email.email,
        subject: subject,
        content: content,
        date: new Date(),
      }
      const index = this.users.indexOf(email);
      this.users[i].sentItems.push(sent);
      this.users[index].inbox.push(inbox);
    });
    this.currentUser = this.users[i];
    this.openSnackBar('Mail has been sent.', 3000);
    this.router.navigateByUrl('inbox');
  }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    config.duration = duration;
    config.verticalPosition = 'top';
    this.snackBar.open(message, 'x', config);
  }
}
