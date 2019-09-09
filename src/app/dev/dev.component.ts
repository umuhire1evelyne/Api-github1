// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-dev',
// //   templateUrl: './dev.component.html',
// //   styleUrls: ['./dev.component.css']
// // })
// // export class DevComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }

// import { Component, OnInit } from '@angular/core';
// import { Dev } from '../dev';
// import { DevRequestService } from '../dev-request.service';
// // import {SearchFormComponent} from '../search-form/search-form';


// @Component({
//   selector: 'app-dev',
//   templateUrl: './dev.component.html',
//   styleUrls: ['./dev.component.css'],
//   providers: [ DevComponent ]
// })
// export class DevComponent implements OnInit {

//   dev: Dev;

//   constructor(private devService: DevRequestService) { }
  

//   ngOnInit() {
//     // this.devService.createUrl();
//     this.devService.devRequest();
//     this.dev = this.devService.dev;
//   }


// }

// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-dev',
// //   templateUrl: './dev.component.html',
// //   styleUrls: ['./dev.component.css']
// // })
// // export class DevComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }

import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevRequestService } from '../dev-request.service';
// import {SearchFormComponent} from '../search-form/search-form';


@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css'],
  providers: [ DevComponent ]
})
export class DevComponent implements OnInit {

  dev: Dev;

  constructor(private devService: DevRequestService) { }
  

  ngOnInit() {
    // this.devService.createUrl();
    this.devService.devRequest();
    this.dev = this.devService.dev;
  }


}