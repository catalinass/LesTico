import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetComponent } from './lessons/alphabet/alphabet.component';

const routes: Routes = [
  { path: '', component: AlphabetComponent },
  { path: 'add-poc', component: AlphabetComponent },
  { path: '**', component: AlphabetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
