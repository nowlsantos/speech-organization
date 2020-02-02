import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpeechService } from 'src/app/services/speech.service';
import { Speech } from 'src/app/models/speech';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    showSpinner = true;

    constructor(private speechService: SpeechService,
                private router: Router ) {}

    ngOnInit() {
        this.speech$ = this.speechService.getSpeeches();
        this.speech$.subscribe( () => this.showSpinner = false );
    }

    navigateSpeechDetail(speech: Speech) {
        this.router.navigate(['/speeches', speech.id, speech]);
    }

    onSearch() {
        const searchTerm = (`${this.searchControl.value}`).toLocaleLowerCase();
        const selectOption = `${this.selectControl.value}`;

        const query$ = of([searchTerm, selectOption]);
        this.speech$ = query$.pipe(
            switchMap( value => this.speechService.search(value))
        );

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
