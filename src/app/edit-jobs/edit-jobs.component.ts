import { Component, Input, OnInit } from '@angular/core';
import { BustleService } from '../Bustle.service';

@Component({
  selector: 'app-edit-jobs',
  templateUrl: './edit-jobs.component.html',
  styleUrls: ['./edit-jobs.component.css'],
  providers: [BustleService]
})
export class EditJobsComponent implements OnInit {

  @Input() selectedJob;

constructor(private bustleService: BustleService) { }

ngOnInit() {
}

beginUpdatingPage(jobToUpdate){
  this.bustleService.updateJob(jobToUpdate);
}

beginDeletingPage(jobToDelete){
  if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.bustleService.deleteJob(jobToDelete);
  }
}
}
