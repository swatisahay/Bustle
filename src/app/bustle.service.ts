import { Injectable } from '@angular/core';
import { Job } from './job.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BustleService {

  jobs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.jobs = database.list('jobs');
  }

  getJobs() {
    return this.jobs;
  }

  addJob(newJob: Job) {
    this.jobs.push(newJob);
  }
  getJobById(jobId: string){
  return this.database.object('/jobs/' + jobId);
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
