// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-search-form',
// //   templateUrl: './search-form.component.html',
// //   styleUrls: ['./search-form.component.css']
// // })
// // export class SearchFormComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }


// import { Component, OnInit } from '@angular/core';
// import {Dev} from '../dev';
// import {HttpClient} from '@angular/common/http';
// import { resolve } from 'q';
// // import {DevRequestService} from '../dev-request.service';
// // import {Repo} from '../repo';


// @Component({
//   selector: 'app-search-form',
//   templateUrl: './search-form.component.html',
//   styleUrls: ['./search-form.component.css'],

// })
// export class SearchFormComponent implements OnInit {
//   // const repo = new Repo();
//    dev = new Dev('', '', '', '','');
//   constructor(private http: HttpClient) { }

//   searcher(search: string) {
//     let x = 'https://api.github.com/users/' + search;
//     this.http.get(x).subscribe(answer => {
//       console.log(answer);
//       // this.dev.name = answer.login;
//       // this.dev.image = answer.avatar_url;
//       resolve(search);
//     });
//     let y = 'https://api.github.com/users/' + search + '/repos' ;
//     this.http.get(y).subscribe(data => {
//        this.dev.repo = data;
//     });
//   }




//   ngOnInit() {
//   }

// }




  
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-search-form',
//   templateUrl: './search-form.component.html',
//   styleUrls: ['./search-form.component.css']
// })
// export class SearchFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import {Dev} from '../dev';
import {HttpClient} from '@angular/common/http';
import { resolve } from 'q';
// import {DevRequestService} from '../dev-request.service';
// import {Repo} from '../repo';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],

})
export class SearchFormComponent implements OnInit {
  // const repo = new Repo();
   dev = new Dev('', '', '', '','');
  constructor(private http: HttpClient) { }

  searcher(search: string) {
    let x = 'https://api.github.com/users/' + search;
    this.http.get(x).subscribe(answer => {
      console.log(answer);
      // this.dev.name = answer.login;
      // this.dev.image = answer.avatar_url;
      resolve(search);
    });
    let y = 'https://api.github.com/users/' + search + '/repos' ;
    this.http.get(y).subscribe(data => {
       this.dev.repo = data;
    });
  }




  ngOnInit() {
  }

}




  