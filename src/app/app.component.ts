import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComposeDialogComponent } from './compose-dialog/compose-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog,
    private router: Router) {
    }

  openDialog(): void {
    const dialogRef = this.dialog.open(ComposeDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
