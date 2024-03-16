import { Injectable } from '@angular/core';
import { ElasticService } from './db/elastic.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private elasticService: ElasticService
    ) { }
    
    isLoggedIn() {
        /* const token = localStorage.getItem("login_token");

        if (token !== undefined) {
            return true;
        } */

        /* TODO this.elasticService."get user associated with token" */   
        return false;
    }

    tryLogin(email: string, password: string) {
        // elastic search for user with this email and hashed password


        // create a login token 
        const token = "TODO";

        // store login token 
        localStorage.setItem('login_token', token)
    }
}
