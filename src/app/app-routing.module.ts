import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//  *Importacion de los componentes main, report y about

import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ReportComponent } from './pages/report/report.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
