import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Speech } from '../models/speech';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    speeches;

    constructor(public db: AngularFirestore) { }

    getSpeeches() {
        return this.speeches = this.db.collection<Speech[]>('speeches').valueChanges();
    }
}
