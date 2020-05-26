import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {DeferModule} from 'primeng/defer';
import {ProgressBarModule} from 'primeng/progressbar';
// import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http.service'
import { JobsComponent } from './components/jobs/jobs.component';
import { KnowledgesComponent } from './components/knowledges/knowledges.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';

import {MenubarModule} from 'primeng/menubar';

import {FieldsetModule} from 'primeng/fieldset';
import { ResumeComponent } from './components/resume/resume.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    KnowledgesComponent,
    ProyectsComponent,
    ContactComponent,
    ProfileComponent,
    ResumeComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    TableModule,
    
    ToolbarModule,
    ButtonModule,
    MenubarModule,
    DeferModule,
    FieldsetModule,
    ProgressBarModule,
    // ChartModule,

    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
