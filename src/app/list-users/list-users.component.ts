import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Array<User>;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router) { }

  loginAsConeiller(conseiller) {
    this.authenticationService.authAs(conseiller.login)
          .subscribe(data => this.router.navigate(['/home']),
                    error => this.alertService.error(error.error));
  }

  getAllConseilers() {
    return false;
  }

  goToDetails(conseiller) {
    this.router.navigate(['/update-conseiller', conseiller.id]);

    return false;
  }

  ngOnInit() {
    console.log('liste-conseiller component marche');
    this.getAllConseilers();
  }

}
