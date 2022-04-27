import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProComponent } from './pro/pro.component';
import { ApplicationComponent } from './application/application.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
//
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { PipesComponent } from './pipes/pipes.component';
import { MDFComponent } from './mdf/mdf.component';
import { ValidatorsComponent } from './validators/validators.component';
import { ServiceAPIComponent } from './service-api/service-api.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"pro",component:ProComponent},
  {path:"application",component:ApplicationComponent},
  {path:"workspace",component:WorkspaceComponent},
  {path:"register",component:RegisterComponent},
  {path:"nav",component:NavComponent},
  //
  {path:"Data_Binding",component:DataBindingComponent},
  {path:"Event_Binding",component:EventBindingComponent},
  {path:"Directives",component:DirectivesComponent},
  {path:"palindrome",component:PalindromeComponent},
  {path:"pipes",component:PipesComponent},
  {path:"MDF",component:MDFComponent},
  {path:"Validators",component:ValidatorsComponent},
  {path:"ServiceAPI",component:ServiceAPIComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Admin",component:AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  