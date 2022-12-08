import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
  {
    path:'',redirectTo:"home" ,pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'jobDetail/:id',component:JobDetailComponent,
    children:[
      {path:'applyJob',component:ApplyJobComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
