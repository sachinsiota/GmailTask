import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { DataServiceService } from '../data-service.service';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.css']
})
export class ComposeDialogComponent implements OnInit {
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  @ViewChild('unitInput', {static: false}) unitInput: ElementRef<HTMLInputElement>;
  allRecepients;
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
    recepientsArray:string[] = [];

  ngOnInit() {
    this.allRecepients = this.dataServiceService.users.slice();
    this.sentForm = new FormGroup({
      subject: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      recepients: new FormControl,
    });
    this.filteredRecepients = this.sentForm.get('recepients').valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : (value ? value.email : null)),
        map(name => name ? this._filter(name) : this.allRecepients)
      )
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.recepientsArray.push(event.option.value);
    this.allRecepients.splice(this.allRecepients.indexOf(event.option.value), 1);
    this.unitInput.nativeElement.value = '';
    this.sentForm.get('recepients').setValue(null);
  }

  private _filter(value) {
    if(value){
    const filterValue = value.toLowerCase();
    return this.dataServiceService.users.filter(unit => unit.email.toLowerCase().indexOf(filterValue) === 0);
  }
}

  onFormSubmit() {
    if (this.sentForm.valid) {
      this.dataServiceService.sendEmail(this.recepientsArray, this.sentForm.value.subject, this.sentForm.value.content);
      this.dialogRef.disableClose = false;
      this.dialogRef.close();
    }
  }

  remove(value) {
    const index = this.recepientsArray.indexOf(value);
    if (index >= 0) {
      this.recepientsArray.splice(index, 1);
      this.allRecepients.push(value);
    }
  }

  onNoClick(): void {
    this.dialogRef.disableClose = false;
    this.dialogRef.close();
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value).trim() ) {
        this.dataServiceService.openSnackBar('All recepients added', 3000);
         //this.recepientsArray.push(value.trim());
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }
    this.sentForm.get('recepients').setValue(null);
    }
  }

}
