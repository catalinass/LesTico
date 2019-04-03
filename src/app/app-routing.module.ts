import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetComponent } from './lessons/alphabet/alphabet.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  { path: '', component: AlphabetComponent },
  { path: 'add-poc', component: AlphabetComponent },
  { path: '**', component: AlphabetComponent },
  { path: 'login', component: LoginComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    