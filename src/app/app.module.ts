import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProComponent } from './pro/pro.component';
import { ApplicationComponent } from './application/application.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NoteComponent } from './note/note.component';
import { RegisterComponent } from './register/register.component';
import { WorkComponent } from './work/work.component';
import { ValidatorsComponent } from './validators/validators.component';
import { ServiceAPIComponent } from './service-api/service-api.component';
import { PipesComponent } from './pipes/pipes.component';
import { SqrtPipe } from './pipes/sqrt custom pipe';
import { AdminComponent } from './admin/admin.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { MDFComponent } from './mdf/mdf.component';
import { LoginComponent } from './login/login.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProComponent,
    ApplicationComponent,
    WorkspaceComponent,
    NoteComponent,
    RegisterComponent,
    WorkComponent,
    ValidatorsComponent,
    ServiceAPIComponent,
    PipesComponent,
    SqrtPipe,
    AdminComponent,
    PalindromeComponent,
    MDFComponent,
    LoginComponent,
    EventBindingComponent,
    DirectivesComponent,
    DataBindingComponent
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
