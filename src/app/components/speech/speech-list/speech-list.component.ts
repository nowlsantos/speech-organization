import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpeechService } from 'src/app/services/speech.service';
import { Speech } from 'src/app/models/speech';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-speech-list',
    templateUrl: './speech-list.component.html',
    styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit {
    searchControl = new FormControl('');
    selectControl = new FormControl('Author');
    speech$: Observable<Speech[]>;
    date: number;
    isNullTerm = false;
    isShowAll = false;

    constructor(private afs: AngularFirestore,
                private speechService: SpeechService,
                private router: Router ) {}

    ngOnInit() {
        this.speech$ = this.speechService.getSpeeches();
    }

    navigateSpeechDetail(speech: Speech) {
        this.router.navigate(['/speeches', speech.id, speech]);
    }

    onSearch() {
        const searchTerm = (`${this.searchControl.value}`).toLocaleLowerCase();
        const selectOption = `${this.selectControl.value}`;

        switch ( selectOption ) {
            case 'Author':
                this.speech$ = this.speechService.searchByAuthor(searchTerm);
                break;

            case 'Title':
                this.speech$ = this.speechService.searchByTitle(searchTerm);
                break;

            case 'Month':
                this.speech$ = this.speechService.searchByMonth(searchTerm);
                break;

            case 'Year':
                this.speech$ = this.speechService.searchByYear(searchTerm);
                break;

            default: break;
        }

        this.speech$.subscribe(speech => {
            this.isNullTerm = !speech.length ? true : false;
        });

        this.isShowAll = true;
        this.searchControl.reset();
    }

    onViewAll() {
        this.isNullTerm = false;
        this.isShowAll = false;
        this.speech$ = this.speechService.viewSpeeches();
    }
}
