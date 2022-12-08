import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { SearchJobPipe } from './pipes/search-job.pipe';
import { SearchLoactionPipe } from './pipes/search-loaction.pipe';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import {CheckboxModule} from 'primeng/checkbox';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobDetailComponent,
    SearchJobPipe,
    SearchLoactionPipe,
    ApplyJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    TableModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
