import { Component, OnInit, Inject } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComposeDialogComponent } from '../compose-dialog/compose-dialog.component';

@Component({
  selector: 'app-view-mail-dialog',
  templateUrl: './view-mail-dialog.component.html',
  styleUrls: ['./view-mail-dialog.component.css']
})
export class ViewMailDialogComponent implements OnInit {
  constructor( public dataServiceService: DataServiceService,
    public dialogRef: MatDialogRef<ViewMailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }
  ngOnInit() {
  }

  // close diolog
  onNoClick(): void {
    this.dialogRef.disableClose = false;
    this.dialogRef.close();
  }


}
