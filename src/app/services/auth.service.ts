import { Injectable } from '@angular/core';
import { ElasticService } from './db/elastic.service';
import { Router } from '@angular/router';
import { sha256 } from 'hash.js';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private elasticService: ElasticService,
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
        // TODO Get correct password hash and email from DB
        const correctHash = "24f323fe52bcb035233adb04203626c83f2d3e9c5ee8267f93ac0843b24c1a55"; // PotencialPassword
        const correctEmail = 'potencial@equipa.nos';

        // verify credentials
        if (sha256().update(password).digest('hex') != correctHash || email != correctEmail) {
            return false;
        }

        // create a login token 
        const token = "62c1f5b7b396dbaa9441dc6eed7a24fa5d8bdf392c6d5eae1fbbe9c4401e6eaa";

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
