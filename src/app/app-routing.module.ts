import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './pages/splash/splash.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "main", component: MainComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
