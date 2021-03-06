import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { Router } from '@angular/router';
import { BustleService } from '../bustle.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [BustleService]
})
export class JobsComponent implements OnInit {

  jobs: FirebaseListObservable<any[]>;
     currentRoute: string = this.router.url;

     constructor(private router: Router, private bustleService: BustleService){}

     ngOnInit(){
       this.jobs = this.bustleService.getJobs();
     }

     goToDetailJobs(clickedJob) {
       this.router.navigate(['jobs', clickedJob.$key]);
     };

}
