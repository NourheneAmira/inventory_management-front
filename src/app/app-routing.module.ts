import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashbordsComponent } from './pages/page-dashbords/page-dashbords.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';

const routes: Routes = [{path:'login',component:PageLoginComponent},
{path:'register',component:PageRegisterComponent},
{path:'',component:PageDashbordsComponent,
children:[
  {path:'statistiques',component:PageStatistiqueComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
