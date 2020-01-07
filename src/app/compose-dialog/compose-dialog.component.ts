import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.css']
})
export class ComposeDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ComposeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    dialogRef.disableClose = true;
  }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
    }
  }

  onNoClick(): void {
    this.dialogRef.disableClose = false;
    this.dialogRef.close();
  }

}

