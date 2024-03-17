import { Component } from '@angular/core';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent {


    hiredPower = 10.35;

    gasSpent = 112.23; // average gas spent/month/person in kWh

    public calculatePricePerMonth(powerSpent?: number) {
        
        return this.calculatePricePerDay() * 30;
    }

    calculatePricePerWeek(){
        return this.calculatePricePerDay() * 7;
    }

    calculatePricePerDay() {
        return 0.0739 + this.gasSpent/30 * 0.1127;
    }

}
