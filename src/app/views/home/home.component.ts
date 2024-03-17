import { Component } from '@angular/core';


interface consumos {
        type: string,
        quantity: string,
        atHome: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    loading: boolean = false;

    heatingPrice = 0;

    submit(target: any) {
        this.loading = true;

        setTimeout(
            () => {
                this.loading = false;
            },
            2000
        )

        const type = (document.querySelector("#resourceType") as HTMLInputElement).value;
        const atHome = (document.querySelector("#atHome") as HTMLInputElement).value;
        const quantity = (document.querySelector("#quantity") as HTMLInputElement).value;

        var consumo: consumos = {
            type: type,
            atHome: atHome,
            quantity: quantity
        }


        /* var consumos = JSON.parse(localStorage.getItem("consumos"));
        if (consumo) {
            if (consumos) {    
                (consumos as Array<consumos>).push(consumo)
            } else {
                consumos = new Array<consumos>(consumo)
            }
            localStorage.setItem("consumos", JSON.stringify(consumos))
        }
         */
    }

    calculateHeatingCost() {
        var currentTemp: number = Number((document.querySelector("#currentTemperatureValue"))?.innerHTML);
        const targetTemp: number = Number((document.querySelector("#chosenTemperatureInput") as HTMLInputElement).value);


        this.heatingPrice = 0;
        console.log((document.querySelector("#currentTemperatureValue"))?.innerHTML)

        while (targetTemp - currentTemp > 0.1) {
            this.heatingPrice += 0.086 * (targetTemp - currentTemp);
            currentTemp += 0.5;
        }

    }

}
