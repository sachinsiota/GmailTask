import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMailDialogComponent } from './view-mail-dialog.component';

describe('ViewMailDialogComponent', () => {
  let component: ViewMailDialogComponent;
  let fixture: ComponentFixture<ViewMailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
