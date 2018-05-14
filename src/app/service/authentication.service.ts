import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import * as CONST from '../constants';
import { User } from '../model/user';
import { error } from 'util';
import { HttpResponse } from 'selenium-webdriver/http';
import { TokenStorage } from './token.storage';

@Injectable()
export class AuthenticationService {

    private auth_url: string = CONST.HOST + ':' + CONST.PORT + '/login';
    private authAs_url: string = CONST.REST_HOST + '/auth';

    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private http: HttpClient,
                private token: TokenStorage) {
        if (localStorage.getItem('currentUser')) {
            this.loggedIn.next(true);
        }
    }

    auth(login: string, password: string) {
        console.log(`login service ${login} ${password}`);

        const credentials: any = { username: login, password: password };

        return this.http.post<any>(this.auth_url, credentials, {observe: 'response'})
            .map( resp => this.token.saveToken(resp.headers.get('Authorization')) );
    }

    authAs(login: string) {
        return this.http.get<User>(this.authAs_url + '/' + login).map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));

            // console.log(JSON.stringify(employee));
            this.loggedIn.next(true);
            return user;
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.token.signOut();
        this.loggedIn.next(false);
    }
}
