import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginDisplayComponent } from './login-display/login-display.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"home", component:HomepageComponent},
  {path:"analysis", component:AnalysisComponent},
  {path:"login", component:LoginDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
