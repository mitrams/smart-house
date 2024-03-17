import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecursosComponent } from './views/recursos/recursos.component';
import { WaterComponent } from './views/recursos/water/water.component';
import { GasComponent } from './views/recursos/gas/gas.component';
import { PowerComponent } from './views/recursos/power/power.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { ScheduleComponent } from './views/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursosComponent,
    WaterComponent,
    GasComponent,
    PowerComponent,
    LoginComponent,
    HomeComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
