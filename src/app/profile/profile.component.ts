import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  model: User;

  constructor() { }

  update() {
  }

  ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('currentUser'));
  }

}
