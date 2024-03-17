import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { RecursosComponent } from './views/recursos/recursos.component';
import { WaterComponent } from './views/recursos/water/water.component';
import { PowerComponent } from './views/recursos/power/power.component';
import { GasComponent } from './views/recursos/gas/gas.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
    { 
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    { 
        path: "login", 
        component: LoginComponent, 
    },
    { 
        path: "recursos", 
        component: RecursosComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "recursos/agua",
        component: WaterComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "recursos/eletricidade",
        component: PowerComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "recursos/gas",
        component: GasComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    /**
     *
     */
    constructor(router: Router) {

    }
}