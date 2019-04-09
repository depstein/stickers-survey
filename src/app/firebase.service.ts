import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
	private responsesCollection: AngularFirestoreCollection<Object>;

  constructor(db:AngularFirestore) {
  	this.responsesCollection = db.collection<Object>('responses');
  	//TODO store and add demographics
  }

  addResponse(response:Response) {
  	this.responsesCollection.add(response.getData());
  }
}
