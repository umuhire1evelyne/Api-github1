// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-repo',
// //   templateUrl: './repo.component.html',
// //   styleUrls: ['./repo.component.css']
// // })
// // export class RepoComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }

// import { Component, OnInit } from '@angular/core';
// import { Dev } from '../dev';
// import { DevComponent } from '../dev/dev.component';
// import { DevRequestService } from '../dev-request.service';
// @Component({
//   selector: 'app-repo',
//   templateUrl: './repo.component.html',
//   styleUrls: ['./repo.component.css'],
//   providers: [ DevComponent ]
// })
// export class RepoComponent implements OnInit {
//   dev: Dev;
//   constructor(private devService: DevRequestService) { }

//   ngOnInit() {
//     this.devService.userRepoRequest();
//     this.dev = this.devService.dev;
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-repo',
//   templateUrl: './repo.component.html',
//   styleUrls: ['./repo.component.css']
// })
// export class RepoComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevComponent } from '../dev/dev.component';
import { DevRequestService } from '../dev-request.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [ DevComponent ]
})
export class RepoComponent implements OnInit {
  dev: Dev;
  constructor(private devService: DevRequestService) { }

  ngOnInit() {
    this.devService.userRepoRequest();
    this.dev = this.devService.dev;
  }

}