import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Speech } from '../models/speech';
import { Observable } from 'rxjs';
=======
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Speech } from '../models/speech';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> 2f898f9596116ac8472b27b26a99dbf99bbfe3b1

@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    private speechCollection: AngularFirestoreCollection<Speech>;
<<<<<<< HEAD
    private speechDoc: AngularFirestoreDocument<Speech>;
    private speech: Observable<Speech>;

    constructor(private db: AngularFirestore) {
        this.speechCollection = this.db.collection<Speech>('speeches', ref => ref.orderBy('date', 'desc'));
    }

    getSpeeches() {
        return this.speechCollection.valueChanges({ idField: 'id' });
    }

    getSpeech(id: string) {
        this.speechDoc = this.db.doc(`speeches/${id}`);
        this.speech = this.speechDoc.valueChanges();
        return this.speech;
    }

    search(term: string) {
        // const query = this.speechCollection.ref.where()
    }

    addSpeech(speech: Speech) {
        this.speechCollection.add(speech);
    }

    deleteSpeech(speech: Speech) {
        this.speechDoc = this.db.doc(`speeches/${speech.id}`);
        this.speechDoc.delete();
    }

    updateSpeech(speech: Speech) {
        // console.log('Update: ', speech);
        this.speechDoc = this.db.doc(`speeches/${speech.id}`);
        this.speechDoc.update(speech);
=======
    private speech$: Observable<Speech[]>;

    constructor(private db: AngularFirestore) {
        this.speechCollection = this.db.collection<Speech>('speeches');

        this.speech$ = this.speechCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Speech;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    getSpeeches() {
        return this.speech$;
>>>>>>> 2f898f9596116ac8472b27b26a99dbf99bbfe3b1
    }
}
