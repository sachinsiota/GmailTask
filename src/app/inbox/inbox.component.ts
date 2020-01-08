import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataServiceService } from '../data-service.service';
import { ViewMailDialogComponent } from '../view-mail-dialog/view-mail-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit, DoCheck {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  displayedColumns: string[] = ['select', 'view', 'email', 'subject', 'content', 'date'];
  dataSource = new MatTableDataSource<any>(null);

  constructor(public dataServiceService: DataServiceService,
    public dialog: MatDialog,
  ) {
    this.dataSource.data = [];
    this.dataSource = new MatTableDataSource<any>(this.dataServiceService.currentUser.inbox ? this.dataServiceService.currentUser.inbox : null);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngDoCheck() {
    if (this.table) {
      this.table.renderRows();
    }
  }

  // view inbox mail and send data to view component
  viewMail(data): void {
    const dialogRef = this.dialog.open(ViewMailDialogComponent, {
      data: {
        type: 'inbox',
        mail: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
