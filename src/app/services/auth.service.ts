import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private router: Router,
    ) { }
    
    isLoggedIn() {
        const token = localStorage.getItem("login_token");

        if (token !== null) {
            return true;
        }

        /* TODO this.elasticService."get user associated with token" */   
        return false;
    }

    tryLogin(email: string, password: string): boolean {
        // TODO elastic search for user with this email and hashed password
        if (false) {
            return false
        }

        // create a login token 
        const token = "TODO";

        // store login token 
        localStorage.setItem('login_token', token)

        return true
    }

    /**
     * End user session
     */
    logout() {
        localStorage.removeItem('login_token');
        this.router.navigate(['/login']);
    }

    /**
     * 
     * @returns token or false if no token is found
     */
    getLoginToken() {
        const token = localStorage.getItem("login_token");

        return token? token : false;
    }
}
