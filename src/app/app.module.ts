// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { DevComponent } from './dev/dev.component';
import { RepoComponent } from './repo/repo.component';
import { DevRequestService } from './dev-request.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    DevComponent,
    RepoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DevRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }