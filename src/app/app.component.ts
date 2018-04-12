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
      apiKey: 'AIzaSyAykIhKZQ_Ie4Q6x3LvxBjAfW9L4dRu1jw',
      authDomain: 'recipe-book-ee2de.firebaseapp.com',
    });
  }

}
