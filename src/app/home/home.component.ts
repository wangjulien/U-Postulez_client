import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser = new User();

  constructor() { }

  ngOnInit() {
    console.log('home fonctionne');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
