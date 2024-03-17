import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'smart-house';

    constructor(
        protected authService: AuthService,
        private router: Router
    ) { }

    open: boolean = true;

    isLoginPage() {
        return this.router.url.includes("login")
    }

    toggleNavBar() {
        const nav = document.querySelector("nav");
        const toggle_btn = document.querySelector("#toggle-btn") as HTMLElement;

        
        if (nav && toggle_btn) {
            if (this.open) {
                this.open = false;
                nav.style.width = '2em';
                toggle_btn.style.position = 'absolute';
            } else {
                this.open = true;
                nav.style.width = '20%'
            }
        }
    }
}
