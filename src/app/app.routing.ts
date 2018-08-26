import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { EditJobsComponent } from './edit-jobs/edit-jobs.component';
import { AdminComponent } from './admin/admin.component';
import { JobsComponent } from './jobs/jobs.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },


   {
     path: 'jobs',
     component: JobsComponent
   },
   {
     path: 'jobs/:id',
     component: JobDetailComponent
   },
   {
     path: 'admin',
     component: AdminComponent
   }
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
