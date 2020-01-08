import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.css']
})
export class ComposeDialogComponent implements OnInit {
  allRecepients: string[] = ['Unit C202', 'Unit C203', 'Unit C204', 'Unit C205', 'Unit C206'];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(
    public dataServiceService: DataServiceService,
    public dialogRef: MatDialogRef<ComposeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  sentForm: FormGroup;
    filteredRecepients: Observable<any[]>;
    recepientsArray:[];

  ngOnInit() {
    this.sentForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      recipients: new FormControl,
    });
    this.filteredRecepients = this.sentForm.get('recipients').valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : (value ? value.email : null)),
        map(name => name ? this._filter(name) : this.dataServiceService.users)
      )
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log(event);
    //this.recepientsArray.push(event.option.value);
    // this.calculateUnitDetails();
    // this.colonyUnits.splice(this.colonyUnits.indexOf(event.option.value), 1);
    // console.log(this.units);
    // console.log(this.colonyUnits);
    // this.unitInput.nativeElement.value = '';
    this.sentForm.get('recipients').setValue(null);
  }

  private _filter(value) {
    console.log(value);
    if(value){
    const filterValue = value.toLowerCase();
    return this.dataServiceService.users.filter(unit => unit.email.toLowerCase().indexOf(filterValue) === 0);
  }
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
