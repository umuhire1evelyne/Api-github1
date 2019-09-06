import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  { path: 'repo', component : RepoComponent},
  { path: 'search', component : SearchFormComponent},
  { path: '', redirectTo:"/search", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
