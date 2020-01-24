import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Speech } from '../models/speech';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    private speechCollection: AngularFirestoreCollection<Speech>;
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
    }
}
