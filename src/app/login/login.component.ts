import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';
import { User } from '../model/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: User = new User();

    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    auth() {
        this.authenticationService.auth(this.model.email, this.model.password)
            .subscribe(resp => this.authAs(this.model.email),
                error => this.alertService.error(error));
    }

    authAs(login: string) {
        this.authenticationService.authAs(login)
            .subscribe(data => this.router.navigate(['/home']),
                error => this.alertService.error(error));
    }

}
