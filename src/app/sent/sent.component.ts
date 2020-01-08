import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { DataServiceService } from '../data-service.service';
import { ViewMailDialogComponent } from '../view-mail-dialog/view-mail-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'view', 'email', 'subject', 'content', 'date'];
  dataSource = new MatTableDataSource<any>(this.dataServiceService.currentUser.sentItems);

  constructor(public dataServiceService: DataServiceService,
    public dialog: MatDialog) { }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }
  
  // view email and data to View component.
  viewMail(data): void {
    const dialogRef = this.dialog.open(ViewMailDialogComponent, {
      data:{
        type: 'sent',
        mail:  data 
     }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
