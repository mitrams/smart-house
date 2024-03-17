import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email!: HTMLInputElement | null;
    password!: HTMLInputElement | null;
    pim : string | undefined;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
        
    }
    
    ngAfterViewInit() {
        this.email = document.getElementById("input-email") as HTMLInputElement;
        this.password = document.getElementById("input-password") as HTMLInputElement;

    }

    login(event: any) {
        console.log(event);

        console.log(this.email?.value)
        console.log(this.password?.value)
        this.pim = this.password?.value

        console.log(this.pim)

        if (this.email && this.password) {
            this.authService.tryLogin(this.email.value, this.password.value)
            this.router.navigate(['/'])
            
        } else {
            // if email or password elems are not found reload page
            window.location.reload();
        }
    }
}
