import { Injectable } from '@angular/core';
import { Jobs } from './jobs.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BustleService {
  jobs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
   }

}
