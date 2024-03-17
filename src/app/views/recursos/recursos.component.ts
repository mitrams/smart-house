import { Component } from '@angular/core';
import { PowerComponent } from './power/power.component';
import { WaterComponent } from './water/water.component';
import { GasComponent } from './gas/gas.component';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {

    power = new PowerComponent;
    water = new WaterComponent;
    gas = new GasComponent;

    powerc = this.power.calculatePricePerMonth();
    waterc = this.water.calculatePricePerMonth();
    gasc = this.gas.calculatePricePerMonth();



}
