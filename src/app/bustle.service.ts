import { Injectable } from '@angular/core';
import { Job } from './job.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BustleService {

  careers: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.careers = database.list('pages');
  }

  getJobs() {
    return this.careers;
  }

  addJob(newJob: Job) {
    this.careers.push(newJob);
  }
  getJobById(pageId: string){
  return this.database.object('/pages/' + pageId);
  }

  updateJob(localUpdatedJob){
    var jobEntryInFirebase = this.getJobById(localUpdatedJob.$key);
    jobEntryInFirebase.update({title: localUpdatedJob.title, description: localUpdatedJob.artist, deadline: localUpdatedJob.deadline});
  }

  deleteJob(localJobToDelete){
    var jobEntryInFirebase = this.getJobById(localJobToDelete.$key);
    jobEntryInFirebase.remove();
  }

}
