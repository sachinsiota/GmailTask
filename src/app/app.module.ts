import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { ComposeDialogComponent } from './compose-dialog/compose-dialog.component';
import { HeaderComponent } from './header/header.component';
import { ViewMailDialogComponent } from './view-mail-dialog/view-mail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    SentComponent,
    CreateUserComponent,
    ComposeDialogComponent,
    HeaderComponent,
    ViewMailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[
    ComposeDialogComponent,
    ViewMailDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
