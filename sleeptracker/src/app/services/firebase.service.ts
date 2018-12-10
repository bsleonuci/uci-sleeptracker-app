import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { SleepData } from '../data/sleep-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
	collection:AngularFirestoreCollection;

  constructor(db:AngularFirestore) {
  	this.collection = db.collection('a5-sleeptracker');
  }

  addSleepLog(sleepLog:SleepData) {
  	this.collection.add(sleepLog.toJSON()).then((reference) =>{
  		console.log("Reference:",reference);
  	});
  }

  getSleepLogs():Observable<DocumentData[]> {
	return this.collection.valueChanges();
  }
}
