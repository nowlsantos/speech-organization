import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Speech } from '../models/speech';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    private speechCollection: AngularFirestoreCollection<Speech>;
    private speechDoc: AngularFirestoreDocument<Speech>;
    private speech: Observable<Speech>;
    private searchSource$: BehaviorSubject<string>;
    searchItem$: Observable<string>;

    constructor(private db: AngularFirestore) {
        this.speechCollection = this.db.collection<Speech>('speeches');
        this.searchSource$ = new BehaviorSubject<string | null>('');
        this.searchItem$ = this.searchSource$.asObservable();
    }

    getSpeeches(term: string = '') {
        return this.speechCollection.valueChanges({ idField: 'id' });
    }

    getSearchItem(term: string | null) {
        this.searchSource$.next(term);
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
        this.speechDoc = this.db.doc(`speeches/${speech.id}`);
        this.speechDoc.update(speech);
    }
}
