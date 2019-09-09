// import { NgModule, Component } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { SearchFormComponent } from './search-form/search-form.component';
// import { RepoComponent } from './repo/repo.component';


// const routes: Routes = [
//   { path: 'repo', component : RepoComponent},
//   { path: 'search', component : SearchFormComponent},
//   { path: '', redirectTo:"/search", pathMatch:"full"},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
  
//  }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilizersPortraitComponent } from 'src/app/utilizers-portrait/utilizers-portrait.component';
import { TheUserComponent } from 'src/app/the-user/the-user.component';
import { ViewComponent } from 'src/app/view/view.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: ViewComponent},
  { path: 'user/repositories?', component: TheUserComponent},
  { path: 'userprofile?', component: UtilizersPortraitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }