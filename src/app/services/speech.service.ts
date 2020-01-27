import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Speech } from '../models/speech';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    private speechCollection: AngularFirestoreCollection<Speech>;
    private speechDoc: AngularFirestoreDocument<Speech>;
    private speech: Observable<Speech>;

    constructor(private db: AngularFirestore) {
        // this.speechCollection = this.db.collection<Speech>('speeches', ref => ref.orderBy('date', 'desc'));
        this.speechCollection = this.db.collection<Speech>('speeches');
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
    }
}
