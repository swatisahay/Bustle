import { Component } from '@angular/core';
import { Job } from '../job.model';

import { BustleService } from '../bustle.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
   providers: [BustleService]
})
export class AdminComponent  {

  constructor(private bustleService: BustleService) { }

     submitForm(title: string, description: string, deadline: string, ) {
       var newJob: Job = new Job(title, description, deadline);
       this.bustleService.addJob(newJob);
     }

}
