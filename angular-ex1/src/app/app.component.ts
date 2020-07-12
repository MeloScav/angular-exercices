import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBN4Burf6FLvivrvHBoBdDeVum44QrFQv8',
      authDomain: 'blog-ba63f.firebaseapp.com',
      databaseURL: 'https://blog-ba63f.firebaseio.com',
      projectId: 'blog-ba63f',
      storageBucket: 'blog-ba63f.appspot.com',
      messagingSenderId: '387133339912',
      appId: '1:387133339912:web:e66732b2730b9e67fcd4bd',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
