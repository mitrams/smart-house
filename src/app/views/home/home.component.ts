import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    loading: boolean = false;

    submit(target: any) {
        this.loading = true;

        setTimeout(
            () => {
                this.loading = false;
            },
            2000
        )
    }

}
