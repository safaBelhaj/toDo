import { Component } from '@angular/core';
import * as firebase  from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyAMSeQTqHrm_DLTn2ddLZbgBYHn8ejCaFk",
      authDomain: "todo-5306c.firebaseapp.com",
      databaseURL: "https://todo-5306c.firebaseio.com",
      projectId: "todo-5306c",
      storageBucket: "todo-5306c.appspot.com",
      messagingSenderId: "296129028816",
      appId: "1:296129028816:web:fa42f6ab871222585174d5",
      measurementId: "G-8EQZTY9X53"
    };
    firebase.initializeApp(firebaseConfig);
    console.log("firebase!!!")
  }

}
