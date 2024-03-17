import { Component } from '@angular/core';



@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {

    hiredPower = 10.35;

    powerSpent = 100; // average power spent/month/person

    calculatePricePerMonth(powerSpent?: number) {
        
        return (powerSpent? powerSpent : this.powerSpent) * 0.1565 + 30 * 0.2459;
    }

    calculatePricePerWeek(){
        return this.calculatePricePerDay() * 7;
    }

    calculatePricePerDay() {
        return this.calculatePricePerMonth(this.powerSpent) / 30;
    }

    ngOnInit() {

    }

}
