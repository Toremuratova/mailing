import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomingComponent } from './pages/incoming/incoming.component';
import { OutcomingComponent } from './pages/outcoming/outcoming.component';
import { NewMessageComponent } from './pages/new-message/new-message.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/incoming', pathMatch: 'full'},
  {path: 'incoming', component: IncomingComponent},
  {path: 'outcoming', component: OutcomingComponent},
  {path: 'new-message', component: NewMessageComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
