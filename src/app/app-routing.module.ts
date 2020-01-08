import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentComponent } from './sent/sent.component';
import { InboxComponent } from './inbox/inbox.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
{ path: '', component: InboxComponent,/*redirectTo: '/inbox',*/ pathMatch: 'full' },
{ path: 'sentmail', component: SentComponent },
{ path: 'inbox', component: InboxComponent },
{ path: 'createUser', component: CreateUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
