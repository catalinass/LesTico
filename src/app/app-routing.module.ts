import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetComponent } from './lessons/alphabet/alphabet.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AlphabetComponent },
  { path: 'alphabet', component: AlphabetComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: AlphabetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
