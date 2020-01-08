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
    public router: Router) { }

  // open compose mail dialog box
  openDialog(): void {
    const dialogRef = this.dialog.open(ComposeDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
