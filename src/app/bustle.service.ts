import { Injectable } from '@angular/core';
import { Jobs } from './jobs.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BustleService {

  career: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.career = database.list('pages');
  }

  getJobs() {
    return this.career;
  }

  addJob(newJob: Jobs) {
    this.career.push(newJob);
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
