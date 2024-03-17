import { Component } from '@angular/core';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {

    hiredPower = 10.35;

    waterSpent = 0.19; // average power spent/month/person

    public calculatePricePerMonth() {
        return this.calculatePricePerDay() * 30;
    }

    calculatePricePerWeek(){
        return this.calculatePricePerDay() * 7;
    }

    calculatePricePerDay(waterSpent?: number) {
        return (0.67 + 0.7106) * (waterSpent? waterSpent : this.waterSpent) + 0.0376 + 0.0553;
    }
    
}
