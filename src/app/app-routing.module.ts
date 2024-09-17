import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: '**', redirectTo: '', pathMatch: 'full' },  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Make sure RouterModule is imported correctly
  exports: [RouterModule]
})
export class AppRoutingModule { }