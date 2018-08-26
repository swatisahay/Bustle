import { Component, Input } from '@angular/core';
import { BustleService } from '../bustle.service';

@Component({
  selector: 'app-edit-jobs',
  templateUrl: './edit-jobs.component.html',
  styleUrls: ['./edit-jobs.component.css'],
  providers: [BustleService]
})
export class EditJobsComponent {

  @Input() selectedJob;

constructor(private bustleService: BustleService) { }



beginUpdatingJob(jobToUpdate){
  this.bustleService.updateJob(jobToUpdate);
}

beginDeletingJob(jobToDelete){
  if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.bustleService.deleteJob(jobToDelete);
  }
}
}
