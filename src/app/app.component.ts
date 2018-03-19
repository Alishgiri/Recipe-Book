import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBL_Iy3BpBoccwgC3M0oudoRfamZ0nuTv8',
      authDomain: 'recipe-book-66e00.firebaseapp.com',
    });
  }

}
