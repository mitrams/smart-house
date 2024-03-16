import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecursosComponent } from './views/recursos/recursos.component';
import { WaterComponent } from './views/recursos/water/water.component';
import { GasComponent } from './views/recursos/gas/gas.component';
import { PowerComponent } from './views/recursos/power/power.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursosComponent,
    WaterComponent,
    GasComponent,
    PowerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
