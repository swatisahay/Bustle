import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../job.model';
import { BustleService } from '../bustle.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers: [BustleService]

})
export class JobDetailComponent implements OnInit {

  jobId: string;
  jobToDisplay;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private bustleService: BustleService
    ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.jobId = urlParameters['id'];
    });
    this.jobToDisplay = this.bustleService.getJobById(this.jobId);
  }

}
