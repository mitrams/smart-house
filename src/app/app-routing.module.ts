import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosComponent } from './views/recursos/recursos.component';
import { WaterComponent } from './views/recursos/water/water.component';
import { PowerComponent } from './views/recursos/power/power.component';
import { GasComponent } from './views/recursos/gas/gas.component';


const routes: Routes = [
    { 
        path: "recursos", 
        component: RecursosComponent, 
    },
    {
        path: "recursos/agua",
        component: WaterComponent,
    },
    {
        path: "recursos/eletricidade",
        component: PowerComponent,
    },
    {
        path: "recursos/gas",
        component: GasComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }